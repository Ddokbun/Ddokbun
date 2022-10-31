package com.harryporter.ddokbun.domain.plant.repository.dto.response;

import com.harryporter.ddokbun.domain.plant.entity.Plant;
import lombok.Data;

@Data
public class SearchPlantInfoResponse {
    private Integer waterCycle;
    private Integer lightType;
    private Integer minTemperature;
    private Integer maxTemperature;
    private String growthHumid;

    public static SearchPlantInfoResponse of(Plant plant){
        SearchPlantInfoResponse temp = new SearchPlantInfoResponse();

        temp.waterCycle = plant.getWaterCycle();
        temp.lightType = plant.getLight();
        temp.minTemperature = plant.getMinTemperature();
        temp.maxTemperature = plant.getMaxTemperature();
        temp.growthHumid = plant.getGrowthHumid();

        return temp;
    }
}
