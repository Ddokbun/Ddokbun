package com.harryporter.ddokbun.domain.plant.dto.response;

import com.harryporter.ddokbun.domain.plant.entity.Pot;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.Data;

@Data
public class MyPotReponse {
    private String potSerial;
    private String plantNickname;
    private String imagePath;
    private Long plantSeq;

    public static MyPotReponse of(Pot pot) {
        MyPotReponse temp = new MyPotReponse();
        temp.potSerial = pot.getPotSerial();
        temp.plantNickname = pot.getPlantNickname();
        if (pot.getPlant() != null);{
            temp.imagePath = pot.getPlant().getImagePath();
            temp.plantSeq = pot.getPlant().getPlantSeq();
            };
        return temp;
    }
}
