package com.harryporter.ddokbun.domain.alarm.res;

import lombok.Getter;

import java.io.Serializable;

@Getter
public class AlarmLogResponse{

    private long alarmLogSeq;
    private String title;
    private String body;
    private String time;

}
