package com.harryporter.ddokbun.domain.plant.dto;

import lombok.Getter;

@Getter
public class MotorActionDto {
    private final String potSerial;
    private final int action;
    private final int gauge;

    private MotorActionDto(String potSerial,int action,int gauge){
        this.potSerial = potSerial;
        this.action = action;
        this.gauge = gauge;
    }

    public static MotorActionDto of(String potSerial){
        return new MotorActionDto(potSerial,1,50);
    }


    public static MotorActionDto of(String potSerial,int gauge){

        if(gauge <= 0){
            gauge = 1;
        }
        else if(gauge > 100){
            gauge= 100;
        }
        return new MotorActionDto(potSerial,1,gauge);
    }
}
