package com.harryporter.ddokbun.domain.plant.dto.response;

import com.harryporter.ddokbun.domain.plant.entity.PotLog;
import lombok.Data;

import java.time.format.DateTimeFormatter;

@Data
public class PotHumidityLogResponse {
    private Double humidity;
    private String createdTime;

    public static PotHumidityLogResponse of(PotLog potLog){
        PotHumidityLogResponse temp = new PotHumidityLogResponse();
        temp.humidity = potLog.getTemperature();
        temp.createdTime = potLog.getCreatedTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

        return temp;
    }
}
