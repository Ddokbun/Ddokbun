package com.harryporter.ddokbun.domain.ai.dto.response;

import com.harryporter.ddokbun.domain.plant.entity.Plant;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ResultResponse {
    private Long plantSeq;
    private String plantName;

    public static ResultResponse setResultResponse(Plant plant){
        ResultResponse pictureresultResponse = new ResultResponse();
        pictureresultResponse.plantSeq = plant.getPlantSeq();
        pictureresultResponse.plantName = plant.getPlantName();
        return  pictureresultResponse;
    }

    public static ResultResponse setNullResultResponse(){
        ResultResponse pictureresultResponse = new ResultResponse();
        pictureresultResponse.plantSeq = null;
        pictureresultResponse.plantName = null;
        return pictureresultResponse;
    }
}
