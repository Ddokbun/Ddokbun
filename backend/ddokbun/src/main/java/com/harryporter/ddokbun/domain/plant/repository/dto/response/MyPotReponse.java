package com.harryporter.ddokbun.domain.plant.repository.dto.response;

import com.harryporter.ddokbun.domain.plant.entity.Pot;
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
        temp.imagePath = pot.getPlant().getImagePath();
        temp.plantSeq = pot.getPlant().getPlantSeq();
        return temp;
    }
}
