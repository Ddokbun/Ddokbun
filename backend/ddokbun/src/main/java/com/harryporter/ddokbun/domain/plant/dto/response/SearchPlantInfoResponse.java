package com.harryporter.ddokbun.domain.plant.dto.response;

import com.harryporter.ddokbun.domain.plant.entity.Plant;
import lombok.Data;

@Data
public class SearchPlantInfoResponse {
    private Integer waterCycle;
    private Integer lightType;
//    private Integer minTemperature;
//    private Integer maxTemperature;

    private String temperatureRange;
    private String growthHumid;

    public static SearchPlantInfoResponse of(Plant plant){
        SearchPlantInfoResponse temp = new SearchPlantInfoResponse();

        temp.waterCycle = plant.getWaterCycle();
        temp.lightType = plant.getLightType();
//        temp.minTemperature = plant.getMinTemperature();
//        temp.maxTemperature = plant.getMaxTemperature();
        temp.temperatureRange =plant.getMinTemperature()+" ~ "+ plant.getMaxTemperature();
        temp.growthHumid = plant.getGrowthHumid();

        return temp;
    }
}
