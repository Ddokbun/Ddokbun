package com.harryporter.ddokbun.domain.plant.repository.dto.response;

import lombok.Data;

@Data
public class MyPotReponse {
    private String potSerial;
    private String plantNickname;
    private String imagePath;
    private Long plantSeq;
}
