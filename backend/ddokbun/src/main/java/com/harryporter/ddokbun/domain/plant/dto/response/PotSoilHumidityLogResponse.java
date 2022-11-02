package com.harryporter.ddokbun.domain.plant.dto.response;

import com.harryporter.ddokbun.domain.plant.entity.PotLog;
import lombok.Data;

import java.time.format.DateTimeFormatter;

@Data
public class PotSoilHumidityLogResponse {
    private Double soilHumidity;
    private String createdTime;

    public static PotSoilHumidityLogResponse of(PotLog potLog){
        PotSoilHumidityLogResponse temp = new PotSoilHumidityLogResponse();
        temp.soilHumidity = potLog.getTemperature();
        temp.createdTime = potLog.getCreatedTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

        return temp;
    }
}
