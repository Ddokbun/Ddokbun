package com.harryporter.ddokbun.domain.plant.dto.response;

import com.harryporter.ddokbun.domain.plant.entity.PotLog;
import lombok.Data;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Data
public class PotTemperatureLogResponse {
    private Double temperature;
    private String createdTime;

    public static PotTemperatureLogResponse of(PotLog potLog){
        PotTemperatureLogResponse temp = new PotTemperatureLogResponse();
        temp.temperature = potLog.getTemperature();
        temp.createdTime = potLog.getCreatedTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

        return temp;
    }
}
