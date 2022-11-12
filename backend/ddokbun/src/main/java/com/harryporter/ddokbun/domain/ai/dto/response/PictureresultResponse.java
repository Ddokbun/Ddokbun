package com.harryporter.ddokbun.domain.ai.dto.response;

import com.harryporter.ddokbun.domain.plant.entity.Plant;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PictureresultResponse {
    private Long plantSeq;
    private String plantName;

    public static PictureresultResponse setPictureResultResponse(Plant plant){
        PictureresultResponse pictureresultResponse = new PictureresultResponse();
        pictureresultResponse.plantSeq = plant.getPlantSeq();
        pictureresultResponse.plantName = plant.getPlantName();
        return  pictureresultResponse;
    }

    public static PictureresultResponse setNullPictureResultResponse(){
        PictureresultResponse pictureresultResponse = new PictureresultResponse();
        pictureresultResponse.plantSeq = null;
        pictureresultResponse.plantName = null;
        return pictureresultResponse;
    }
}
