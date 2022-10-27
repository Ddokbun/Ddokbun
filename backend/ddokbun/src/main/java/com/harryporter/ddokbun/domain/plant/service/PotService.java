package com.harryporter.ddokbun.domain.plant.service;

import com.harryporter.ddokbun.domain.plant.dto.request.RegisterPotRequest;
import com.harryporter.ddokbun.domain.plant.dto.response.RegisterPotResponse;

public interface PotService {


    RegisterPotResponse registerPot(RegisterPotRequest registerPotRequest);

}
