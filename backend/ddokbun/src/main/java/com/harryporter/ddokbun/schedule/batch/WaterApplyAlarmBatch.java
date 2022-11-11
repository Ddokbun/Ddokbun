package com.harryporter.ddokbun.schedule.batch;

import com.harryporter.ddokbun.domain.alarm.dto.AlarmMessageDto;
import com.harryporter.ddokbun.domain.alarm.service.AlarmService;
import com.harryporter.ddokbun.domain.plant.entity.Pot;
import com.harryporter.ddokbun.domain.plant.repository.WaterApplyRepository;
import com.harryporter.ddokbun.domain.plant.service.WaterApplyUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.JobScope;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepScope;
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
import java.time.temporal.ChronoUnit;
import javax.persistence.EntityManagerFactory;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@Configuration
@Slf4j
public class WaterApplyAlarmBatch {


    @Autowired
    private JobBuilderFactory jobBuilderFactory;
    @Autowired private StepBuilderFactory stepBuilderFactory;
    //엔티티 매니저 멀티쓰레드 해결해주는 랩퍼
    @Autowired private EntityManagerFactory entityManagerFactory;

    @Autowired
    private WaterApplyUtil waterApplyUtil;
    @Autowired
    private WaterApplyRepository waterApplyRepository;
    @Autowired
    private AlarmService alarmService;



    @Bean(value = "WaterApplyAlarmJob")
    public Job AutoWaterApplyJob() throws Exception {

        Job exampleJob = jobBuilderFactory.get("WaterApplyAlarmJob")
                .start(WaterApplyAlarmStep())
                .build();

        return exampleJob;
    }


    @Bean
    @JobScope
    public Step WaterApplyAlarmStep() throws Exception {
        return stepBuilderFactory.get("WaterApplyAlarmStep")
                .<Pot,Pot>chunk(10)
                .reader(potReader(null))
                .processor(processor(null))
                .writer(writer())
                .build();
    }
    @Bean("reader2")
    @StepScope
    public JpaPagingItemReader<Pot> potReader(@Value("#{jobParameters[date]}")  String date) throws Exception {

        Map<String,Object> parameterValues = new HashMap<>();
        parameterValues.put("now", LocalDate.parse(date)); //돌아가는 컴퓨터 현재 시간


        //읽어오븐 갯수는 커밋 갯수인 청크사이즈랑 동일하게 한다.
        return new JpaPagingItemReaderBuilder<Pot>()
                .pageSize(10)
                .queryString("SELECT p FROM Pot p WHERE p.plant != null AND p.user != null AND p.isAuto = 'N' AND p.waterSupply  < :now") //우선적으로는 자동설정된 화분들 AND 물준 날이 오늘 미만인
                .parameterValues(parameterValues)
                .entityManagerFactory(entityManagerFactory)
                .name("ManualPotReader")
                .build();

    }

    @Bean("processor2")
    @StepScope
    public ItemProcessor<Pot, Pot> processor(@Value("#{jobParameters[date]}")  String date){

        return new ItemProcessor<Pot, Pot>() {

            @Override
            public Pot process(Pot pot) throws Exception {
                //자동 설정으로 된 화분들 프로세싱
                LocalDate localDate = pot.getWaterSupply();

                int period = pot.getWaterPeriod();

                LocalDate now = LocalDate.parse(date);
                if(!localDate.plusDays(period).isAfter(now)){
                    //물주기 + 물 마지막으로 줫던 일 >= 현재 물을 주라는 알림
                    alarmService.sendAlarmToUser(new AlarmMessageDto(
                            String.format("{}님 물을 줘야할 거 같아요!",pot.getUser().getUserNickname()),
                            String.format("{}의 {}의 경우 권장 물 주기는 {} 일에 한번입니다. 현재 {}간 물을 주지 않았습니다.",
                                    pot.getPlantNickname(),
                                    pot.getPlant().getPlantName(),
                                    pot.getPlant().getWaterCycle(),
                                    ChronoUnit.DAYS.between(pot.getWaterSupply(),now)
                                    )
                    ),pot.getUser().getUserSeq());
                }
                return pot;
            }
        };
    }

    @Bean("writer2")
    @StepScope
    public JpaItemWriter<Pot> writer(){
        return new JpaItemWriterBuilder<Pot>()
                .entityManagerFactory(entityManagerFactory)
                .build();
    }

}
