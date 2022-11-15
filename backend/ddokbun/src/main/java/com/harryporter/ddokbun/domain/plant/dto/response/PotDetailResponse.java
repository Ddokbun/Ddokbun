package com.harryporter.ddokbun.domain.plant.dto.response;

import com.harryporter.ddokbun.domain.plant.entity.Pot;
import lombok.Data;

import java.time.LocalDate;

@Data
public class PotDetailResponse {

    private Long plantSeq;
    private String plantName;
    private String plantEnName;
    private String imgUrl;
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

    private Integer waterPeriod;
    private LocalDate waterSupply;


    public static PotDetailResponse of(Pot pot){

        PotDetailResponse temp = new PotDetailResponse();

        temp.temperature = pot.getTemperature();
        temp.humidity = pot.getHumidity();
        temp.soilHumidity = pot.getSoilHumidity();
        temp.light = pot.getLight();
        temp.waterHeight = pot.getWaterHeight();
        temp.isAuto = pot.getIsAuto();
        temp.waterPeriod = pot.getWaterPeriod();
        temp.waterSupply = pot.getWaterSupply();

        if(pot.getPlant() != null){
            temp.plantSeq = pot.getPlant().getPlantSeq();
            temp.maxTemperature = pot.getPlant().getMaxTemperature();
            temp.minTemperature = pot.getPlant().getMinTemperature();
            temp.growHumid = pot.getPlant().getGrowthHumid();
            temp.lightType = pot.getPlant().getLightType();
            temp.waterCycle = pot.getPlant().getWaterCycle();
            temp.plantName=pot.getPlant().getPlantName();
            temp.plantEnName=pot.getPlant().getPlantNeName();
            temp.imgUrl="https://ddokbun.com/api/resources/s3?plantSeq="+pot.getPlant().getPlantSeq();
        }
        return temp;

    }
}
