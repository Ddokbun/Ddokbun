package com.harryporter.ddokbun.domain.plant.dto.response;

import com.harryporter.ddokbun.domain.plant.entity.PotLog;
import lombok.Data;

import java.time.format.DateTimeFormatter;

@Data
public class PotHumidLogResponse {
    private Double humid;
    private String createdTime;

    public static PotHumidLogResponse of(PotLog potLog){
        PotHumidLogResponse temp = new PotHumidLogResponse();
        temp.humid = potLog.getTemperature();
        temp.createdTime = potLog.getCreatedTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

        return temp;
    }
}
