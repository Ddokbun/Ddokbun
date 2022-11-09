package com.harryporter.ddokbun.domain.alarm.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="alarm_log")
public class AlarmLog {

    @Id
    @Column(name = "alarm_log_seq",nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long alarmLogSeq;

    @Column(name = "userSeq",nullable = false)
    private Long userSeq;

    private String title;
    private String body;

    public AlarmLog(Long userSeq,String title,String body){
        this.userSeq = userSeq;
        this.title = title;
        this.body = body;
    }

}
