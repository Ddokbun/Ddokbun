package com.harryporter.ddokbunbatch.conf;

import com.harryporter.ddokbunbatch.run.HankerJobA;
import lombok.RequiredArgsConstructor;
import org.quartz.*;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

/**
 * 잡을 관리하고 실행하는 주체
 */
@Configuration
@RequiredArgsConstructor
public class JobSetting {
    //스케줄러
    private final Scheduler scheduler;


    /**
     * 스케줄러에 관리될 잡과 트리거들을 등록시킨다.
     */
    @PostConstruct
    public void start(){
        JobDetail jobDetail = buildJobDetail(HankerJobA.class, new HashMap());

        try{
            scheduler.scheduleJob(jobDetail, buildJobTrigger("0/20 * * * * ?"));


        } catch(SchedulerException e){
            e.printStackTrace();
        }
    }

    /**
     * 잡을 실행시킬 트리거를 cron 표현식을 이용해 등록한다.
     * @param scheduleExp
     * @return
     */
    public Trigger buildJobTrigger(String scheduleExp){
        return TriggerBuilder.newTrigger()
                .withSchedule(CronScheduleBuilder.cronSchedule(scheduleExp)).build();
    }

    /**
     * 잡을 생성하고, 잡에 주입할 파라미터를 받고, 반환한다.
     * @param job
     * @param params
     * @return
     */
    public JobDetail buildJobDetail(Class job, Map params){
        JobDataMap jobDataMap = new JobDataMap();
        jobDataMap.putAll(params);

        return JobBuilder.newJob(job).usingJobData(jobDataMap).build();
    }
}
