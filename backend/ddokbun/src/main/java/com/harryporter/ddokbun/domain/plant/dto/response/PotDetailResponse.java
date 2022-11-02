package com.harryporter.ddokbun.domain.plant.dto.response;

import com.harryporter.ddokbun.domain.plant.entity.Pot;
import lombok.Data;

@Data
public class PotDetailResponse {

    private Integer maxTemperature;
    private Integer minTemperature;
    private String growHumid;
    private Integer lightType;
    private Integer waterCycle;
    private Double temperature;
    private Double humidity;
    private Double soilHumidity;
    private Double light;
    private Double waterHeight;
    private String isAuto;

    public static PotDetailResponse of(Pot pot){
        PotDetailResponse temp = new PotDetailResponse();
        temp.maxTemperature = pot.getPlant().getMaxTemperature();
        temp.minTemperature = pot.getPlant().getMinTemperature();
        temp.growHumid = pot.getPlant().getGrowthHumid();
        temp.lightType = pot.getPlant().getLightType();
        temp.waterCycle = pot.getPlant().getWaterCycle();
        temp.temperature = pot.getTemperature();
        temp.humidity = pot.getHumidity();
        temp.soilHumidity = pot.getSoilHumidity();
        temp.light = pot.getLight();
        temp.waterHeight = pot.getWaterHeight();
        temp.isAuto = pot.getIsAuto();
        return temp;
    }
}
