package com.harryporter.ddokbun.schedule.batch;

import com.harryporter.ddokbun.domain.alarm.dto.AlarmMessageDto;
import com.harryporter.ddokbun.domain.alarm.service.AlarmService;
import com.harryporter.ddokbun.domain.plant.entity.Pot;
import lombok.RequiredArgsConstructor;
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

import javax.persistence.EntityManagerFactory;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.Map;

@Configuration
@RequiredArgsConstructor
public class WaterLevelAlarmBatch {
    private final JobBuilderFactory jobBuilderFactory;
    private final StepBuilderFactory stepBuilderFactory;
    private final EntityManagerFactory entityManagerFactory;
    private final AlarmService alarmService;


    @Bean(value = "waterLevelAlarmJob")
    public Job waterLevelAlarmJob() throws Exception {

        Job exampleJob = jobBuilderFactory.get("AutoWaterApplyJob")
                .start(waterLevelAlarmStep())
                .build();

        return exampleJob;
    }

    @JobScope
    @Bean("WaterLevelAlarmStep")
    public Step waterLevelAlarmStep() throws Exception {
        return stepBuilderFactory.get("WaterLevelAlarmStep")
                .<Pot,Pot>chunk(100)
                .reader(potReader(null))
                .processor(processor(null))
                .writer(writer())
                .build();
    }


    @Bean("reader3")
    @StepScope
    public JpaPagingItemReader<Pot> potReader(@Value("#{jobParameters[date]}")  String date) throws Exception {

        //읽어오븐 갯수는 커밋 갯수인 청크사이즈랑 동일하게 한다.
        return new JpaPagingItemReaderBuilder<Pot>()
                .pageSize(100)
                .queryString("SELECT p FROM Pot p INNER JOIN FETCH p.user WHERE p.waterHeight <= 1")
                //2 == 물 습기가 센서에 남음, 3 완전 마름
                .entityManagerFactory(entityManagerFactory)
                .name("WaterLevelAlarmReader")
                .build();

    }

    @Bean("processor3")
    @StepScope
    public ItemProcessor<Pot, Pot> processor(@Value("#{jobParameters[date]}")  String date){

        return pot -> {

            String title= "물통 물 부족" ;
            String body = String.format("%s 님 물을 공급할 물통에 물이 부족합니다. 물을 채워주세요.",pot.getUser().getUserNickname());

            alarmService.sendAlarmToUser(new AlarmMessageDto(title,body),pot.getUser().getUserSeq());
            return pot;
        };
    }

    @Bean("writer4")
    @StepScope
    public JpaItemWriter<Pot> writer(){
        return new JpaItemWriterBuilder<Pot>()
                .entityManagerFactory(entityManagerFactory)
                .build();
    }



}
