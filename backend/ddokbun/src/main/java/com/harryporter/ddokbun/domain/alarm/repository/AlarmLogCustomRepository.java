package com.harryporter.ddokbun.domain.alarm.repository;

import com.harryporter.ddokbun.domain.alarm.entity.QAlarmLog;
import com.harryporter.ddokbun.domain.alarm.res.AlarmLogResponse;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class AlarmLogCustomRepository {

    private final JPAQueryFactory queryFactory;


    public List<AlarmLogResponse> getAlarmLogsByUserSeq(Long lastSeq, Long userSeq) {
        BooleanBuilder builder = new BooleanBuilder();

        QAlarmLog alarmLog = new QAlarmLog("al");

        if(lastSeq != null){
            builder.and(alarmLog.alarmLogSeq.lt(lastSeq));
        }
        builder.and(alarmLog.userSeq.eq(userSeq));

        List<AlarmLogResponse> alarmLogResponseList  = queryFactory.from(alarmLog)
                .select(Projections.fields(AlarmLogResponse.class,
                        alarmLog.alarmLogSeq.as("alarmLogSeq"),
                        alarmLog.title.as("title"),
                        alarmLog.body.as("body"),
                        alarmLog.time.as("time")
                        ))
                .where(builder).fetch();
        return alarmLogResponseList;

    }

}
