package com.harryporter.ddokbun.domain.plant.repository.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
public class RegisterPotResponse {
    private String potSerial;

//    @Builder
//    public RegisterPotResponse(String serialnumber){
//        this.potSerial = serialnumber;
//    }
}
