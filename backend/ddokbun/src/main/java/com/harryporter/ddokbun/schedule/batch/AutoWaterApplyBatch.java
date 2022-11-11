package com.harryporter.ddokbun.schedule.batch;

import com.harryporter.ddokbun.domain.alarm.dto.AlarmMessageDto;
import com.harryporter.ddokbun.domain.alarm.service.AlarmService;
import com.harryporter.ddokbun.domain.plant.dto.MotorActionDto;
import com.harryporter.ddokbun.domain.plant.entity.Pot;
import com.harryporter.ddokbun.domain.plant.entity.WaterApply;
import com.harryporter.ddokbun.domain.plant.repository.WaterApplyRepository;
import com.harryporter.ddokbun.domain.plant.service.PotService;
import com.harryporter.ddokbun.domain.plant.service.WaterApplyUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.*;
import org.springframework.batch.core.configuration.annotation.*;

import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.database.JpaItemWriter;
import org.springframework.batch.item.database.JpaPagingItemReader;
import org.springframework.batch.item.database.builder.JpaItemWriterBuilder;
import org.springframework.batch.item.database.builder.JpaPagingItemReaderBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.concurrent.ListenableFutureCallback;

import javax.persistence.EntityManagerFactory;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

//https://khj93.tistory.com/entry/Spring-Batch%EB%9E%80-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B3%A0-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
//https://jojoldu.tistory.com/487
@Configuration
@Slf4j
public class AutoWaterApplyBatch {


    @Autowired
    private JobBuilderFactory jobBuilderFactory;
    @Autowired
    private StepBuilderFactory stepBuilderFactory;
    //엔티티 매니저 멀티쓰레드 해결해주는 랩퍼
    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Autowired
    private PotService potService;
    @Autowired
    private WaterApplyRepository waterApplyRepository;
    @Autowired
    private AlarmService alarmService;


    @Bean(value = "AutoWaterApplyJob")
    public Job AutoWaterApplyJob() throws Exception {

        Job exampleJob = jobBuilderFactory.get("AutoWaterApplyJob")
                .start(AutoWaterApplyStep())
                .build();


        return exampleJob;
    }


    @Bean
    @JobScope
    public Step AutoWaterApplyStep() throws Exception {
        return stepBuilderFactory.get("AutoWaterApplyStep")
                .<Pot, Pot>chunk(10)
                .reader(reader(null))
                .processor(processor(null))
                .writer(writer())
                .build();
    }

    @Bean("reader1")
    @StepScope
    public JpaPagingItemReader<Pot> reader(@Value("#{jobParameters[date]}") String date) throws Exception {

        Map<String, Object> parameterValues = new HashMap<>();
        parameterValues.put("now", LocalDate.parse(date)); //돌아가는 컴퓨터 현재 시간


        //읽
        // \어오븐 갯수는 커밋 갯수인 청크사이즈랑 동일하게 한다.
        return new JpaPagingItemReaderBuilder<Pot>()
                .pageSize(10)
                .queryString("SELECT p FROM Pot p INNER JOIN FETCH p.user WHERE p.isAuto = 'Y' AND p.waterSupply  < :now AND p.waterPeriod != 0") //우선적으로는 자동설정된 화분들 AND 물준 날이 오늘 미만인
                .parameterValues(parameterValues)
                .entityManagerFactory(entityManagerFactory)
                .name("AutoPotReader")
                .build();
    }

    @Bean("processor1")
    @StepScope
    public ItemProcessor<Pot, Pot> processor(@Value("#{jobParameters[date]}") String date) {

        return new ItemProcessor<Pot, Pot>() {
            @Override
            public Pot process(Pot pot) throws Exception {
                //자동 설정으로 된 화분들 프로세싱
                LocalDate localDate = pot.getWaterSupply();

                int period = pot.getWaterPeriod();

                if (!localDate.plusDays(period).isAfter(LocalDate.parse(date))) {
                    //물주기 + 물 마지막으로 줫던 일 == 현재 라면 물을 줘야함

                    potService.applyWater(pot.getPotSerial(), pot.getUser().getUserSeq());
                    pot.potWaterApllyChange(LocalDate.parse(date));

                    String title = String.format("자동 물주기");
                    String body = String.format("%s님,%s 화분에 물이 공급되었습니다.", pot.getUser().getUserNickname(), pot.getPlantNickname());
                    alarmService.sendAlarmToUser(new AlarmMessageDto(title, body), pot.getUser().getUserSeq());
                }

                return pot;
            }
        };
    }

    @Bean("writer1")
    @StepScope
    public JpaItemWriter<Pot> writer() {
        return new JpaItemWriterBuilder<Pot>()
                .entityManagerFactory(entityManagerFactory)
                .build();
    }

}
