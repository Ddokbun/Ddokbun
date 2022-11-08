package com.harryporter.ddokbun.domain.survey.dto.response;

import lombok.Data;

import java.util.Map;

@Data
public class SurveyAnswerResponse {
    private Long itemSeq;
    private String itemName;
    private String itemEnName;
    private String itemPrice;
    private String itemPicture;
    private String recRate;

    public static SurveyAnswerResponse of(Map<String, Object> response){
        SurveyAnswerResponse temp = new SurveyAnswerResponse();

        temp.itemSeq = Long.valueOf(String.valueOf(response.get("item_seq")));
        temp.itemName = String.valueOf(response.get("item_name"));
        temp.itemEnName = String.valueOf(response.get("item_en_name"));
        temp.itemPrice = String.valueOf(response.get("item_price"));
        temp.itemPicture = String.valueOf(response.get("item_picture"));
        temp.recRate = String.valueOf(response.get("rec_rate"));

        return temp;

    }
}
