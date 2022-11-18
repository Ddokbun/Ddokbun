package com.harryporter.ddokbun.domain.ai.dto.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PictureResponse {
    private String plantName;

    public static PictureResponse setPictureResponse(String result){
        PictureResponse pictureResponse = new PictureResponse();
        pictureResponse.plantName = result;
        return  pictureResponse;
    }
}
