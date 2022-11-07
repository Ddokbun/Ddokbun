package com.harryporter.ddokbun.schedule.batch;

import com.harryporter.ddokbun.domain.plant.dto.MotorActionDto;
import com.harryporter.ddokbun.domain.plant.entity.Pot;
import com.harryporter.ddokbun.domain.plant.entity.WaterApply;
import com.harryporter.ddokbun.domain.plant.repository.WaterApplyRepository;
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
    public JobBuilderFactory jobBuilderFactory;
    @Autowired public StepBuilderFactory stepBuilderFactory;
    //엔티티 매니저 멀티쓰레드 해결해주는 랩퍼
    @Autowired public EntityManagerFactory entityManagerFactory;

    @Autowired
    public WaterApplyUtil waterApplyUtil;
    @Autowired
    public WaterApplyRepository waterApplyRepository;



    @Bean(value = "AutoWaterApplyJob")
    public Job AutoWaterApplyJob() throws Exception {

        Job exampleJob = jobBuilderFactory.get("AutoWaterApplyJob")
                .start(Step())
                .build();

        return exampleJob;
    }


    @Bean
    @JobScope
    public Step Step() throws Exception {
        return stepBuilderFactory.get("Step")
                .<Pot,Pot>chunk(10)
                .reader(reader(null))
                .processor(processor(null))
                .writer(writer())
                .build();
    }
    @Bean
    @StepScope
    public JpaPagingItemReader<Pot> reader(@Value("#{jobParameters[date]}")  String date) throws Exception {

        Map<String,Object> parameterValues = new HashMap<>();
        parameterValues.put("now", LocalDate.parse(date)); //돌아가는 컴퓨터 현재 시간


        //읽어오븐 갯수는 커밋 갯수인 청크사이즈랑 동일하게 한다.
        return new JpaPagingItemReaderBuilder<Pot>()
                .pageSize(10)
                .queryString("SELECT p FROM Pot p WHERE p.isAuto = 'Y' AND p.waterSupply  < :now ") //우선적으로는 자동설정된 화분들 AND 물준 날이 오늘 미만인
                .parameterValues(parameterValues)
                .entityManagerFactory(entityManagerFactory)
                .name("JpaPagingItemReader")
                .build();
    }

    @Bean
    @StepScope
    public ItemProcessor<Pot, Pot> processor(@Value("#{jobParameters[date]}")  String date){

        return new ItemProcessor<Pot, Pot>() {
            @Override
            public Pot process(Pot pot) throws Exception {
                //자동 설정으로 된 화분들 프로세싱

                LocalDate localDate = pot.getWaterSupply();
                //int period = pot.getWaterPeriod(); 물주기 설정이 아직 없음

                int period = 7;

                if(localDate.plusDays(period) == LocalDate.parse(date)){
                    //물주기 + 물 마지막으로 줫던 일 == 현재 라면 물을 줘야함
                    waterApplyUtil.sendMotorAction(MotorActionDto.of(pot.getPotSerial()), new ListenableFutureCallback() {
                        @Override
                        public void onSuccess(Object result) {
                            WaterApply waterApply = new WaterApply(pot);
                            log.info("{} 화분 물 주기 메세지 발송", pot.getPotSerial());
                            waterApplyRepository.save(waterApply);
                            pot.potWaterApllyChange(LocalDate.now());
                        }

                        @Override
                        public void onFailure(Throwable ex) {
                            log.info("{} :: {} : {}",pot.getPotSerial(),ex.getMessage(),ex.getCause().toString());
                        }

                    });
                }


                return pot;
            }
        };
    }

    @Bean
    @StepScope
    public JpaItemWriter<Pot> writer(){
        return new JpaItemWriterBuilder<Pot>()
                .entityManagerFactory(entityManagerFactory)
                .build();
    }

}
