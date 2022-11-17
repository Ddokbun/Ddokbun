package com.harryporter.ddokbun.domain.plant.dto.response;

import com.harryporter.ddokbun.domain.plant.entity.PotLog;
import lombok.Data;

import java.time.format.DateTimeFormatter;

@Data
public class PotLightLogResponse {
    private Double light;
    private String createdTime;

    public static PotLightLogResponse of(PotLog potLog){
        PotLightLogResponse temp = new PotLightLogResponse();
        temp.light = potLog.getLight();
        temp.createdTime = potLog.getCreatedTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

        return temp;
    }
}
