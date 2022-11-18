package com.harryporter.ddokbun.domain.alarm.dto;

import lombok.Getter;

@Getter
public class AlarmMessageDto {
    private String title;
    private String body;

    public AlarmMessageDto(){
       this("","");
    }
    public AlarmMessageDto(String title,String body){
        this.title = title;
        this.body = body;
    }
    public AlarmMessageDto(String title){
        this(title,"");
    }
}
