package com.harryporter.ddokbun.domain.plant.service;


import com.harryporter.ddokbun.domain.plant.dto.request.RegisterPotRequest;
import com.harryporter.ddokbun.domain.plant.dto.response.RegisterPotResponse;
import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.plant.entity.Pot;
import com.harryporter.ddokbun.domain.plant.repository.PotRepository;
import com.harryporter.ddokbun.domain.plant.repository.PotRepositoryCustom;
import com.harryporter.ddokbun.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
public class PotServiceImple implements PotService{

    private final PotRepository potRepository;
    private final PotRepositoryCustom potRepositoryCustom;

    @Override
    public RegisterPotResponse registerPot(RegisterPotRequest registerPotRequest){
        // Plant_seq로 통해서 Plant를 받아오는 logic으로 변경하기
        Plant plant = new Plant();
        // Access_token으로 User을 받아오는 로직으로 변경하기
        User user = new User();
        // RegisterPotResponse 생성자
        RegisterPotResponse registerPotResponse = new RegisterPotResponse(registerPotRequest.getPotSerial());
        Pot potEntity = new Pot(registerPotRequest, user, plant);
        potRepository.save(potEntity);

        return registerPotResponse;
    }

}
