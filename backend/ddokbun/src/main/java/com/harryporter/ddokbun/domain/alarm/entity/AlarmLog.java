package com.harryporter.ddokbun.domain.alarm.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@Getter
@Setter
@Table(name="alarm_log")
public class AlarmLog {

    @Id
    @Column(name = "alarm_log_seq",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long alarmLogSeq;

    @Column(name = "userSeq",nullable = false)
    private Long userSeq;

    @Column
    private String title;
    @Column
    private String body;
    @Column
    private String time;

    public AlarmLog(Long userSeq,String title,String body){
        this.userSeq = userSeq;
        this.title = title;
        this.body = body;
    }

    @PrePersist
    public void prePersist(){
        this.time = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }

}
