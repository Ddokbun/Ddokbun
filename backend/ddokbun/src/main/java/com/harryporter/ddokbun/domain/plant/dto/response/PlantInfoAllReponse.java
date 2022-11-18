package com.harryporter.ddokbun.domain.plant.dto.response;

import com.harryporter.ddokbun.domain.plant.entity.Plant;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlantInfoAllReponse {

    private Long plantSeq;
    private String plantName;
    private String plantNeName;
    private String plantZRName;
    private String distbName;
    private String imagePath;

    public static PlantInfoAllReponse of(Plant plant) {
        PlantInfoAllReponse temp = new PlantInfoAllReponse();

        temp.plantSeq = plant.getPlantSeq();
        temp.plantName = plant.getPlantName();
        temp.plantNeName = plant.getPlantNeName();
        temp.plantZRName = plant.getPlantZRName();
        temp.distbName = plant.getDistbName();
        temp.imagePath = "https://ddokbun.com/api/resources/s3?plantSeq="+plant.getPlantSeq() ;

        return temp;
    }
}
