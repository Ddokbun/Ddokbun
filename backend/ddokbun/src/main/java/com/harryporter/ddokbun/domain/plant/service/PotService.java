package com.harryporter.ddokbun.domain.plant.service;


import com.harryporter.ddokbun.domain.plant.dto.request.RegisterPotRequest;
import com.harryporter.ddokbun.domain.plant.dto.response.RegisterPotResponse;
import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.plant.entity.Pot;
import com.harryporter.ddokbun.domain.plant.repository.PlantRepository;
import com.harryporter.ddokbun.domain.plant.repository.PotRepository;
import com.harryporter.ddokbun.domain.plant.repository.PotRepositoryCustom;
import com.harryporter.ddokbun.domain.user.entity.User;
import com.harryporter.ddokbun.domain.user.repository.UserRepository;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Slf4j
@RequiredArgsConstructor
@Service
public class PotService {

    private final PotRepository potRepository;
    private final PotRepositoryCustom potRepositoryCustom;
    private final UserRepository userRepository;
    private final PlantRepository plantRepository;

    @Transactional
    public RegisterPotResponse registerPot(RegisterPotRequest registerPotRequest, Long userSeq){
        // Plant_seq로 통해서 Plant를 받아오는 logic으로 변경하기
        Plant plant = plantRepository.findByPlantSeq(registerPotRequest.getPlantSeq()).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND, "식물을 찾을 수 없습니다.")
        );
        // Access_token으로 User을 받아오는 로직으로 변경하기
        User user = userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다.")
        );
        log.info("registerPotInfo :: potSrial : {} :: plantSeq : {} :: userSeq : {}", registerPotRequest.getPotSerial(), registerPotRequest.getPlantSeq(), userSeq);
        // RegisterPotResponse 생성자
        RegisterPotResponse registerPotResponse = new RegisterPotResponse(registerPotRequest.getPotSerial());
        Pot potEntity = new Pot(registerPotRequest, user, plant);
        potRepository.save(potEntity);

        return registerPotResponse;
    }

    @Transactional
    public void unregisterPot(String potSerial, Long userSeq){
        // Access_token으로 User을 받아오는 로직으로 변경하기
        User user = userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다.")
        );
        // potSerial로 통해서 화분 불러오기
        Pot pot = potRepository.findByPotSerial(potSerial).orElseThrow(
                () -> new GeneralException(ErrorCode.NOT_FOUND, "해당 식물을 찾을 수 없습니다.")
        );

        log.info("UnregisterPotInfo :: potSrial : {} :: userSeq : {}", potSerial, userSeq);
        if (pot.getUser().getUserSeq() == userSeq){
            potRepository.delete(pot);
        } else {
            throw new GeneralException(ErrorCode.BAD_REQUEST, "당신의 화분이 아닙니다");
        }
    }



}
