package com.harryporter.ddokbun.domain.plant.service;


import com.harryporter.ddokbun.domain.plant.dto.MotorActionDto;
import com.harryporter.ddokbun.domain.plant.entity.WaterApply;
import com.harryporter.ddokbun.domain.plant.repository.*;
import com.harryporter.ddokbun.domain.plant.repository.WaterApplyRepository;
import com.harryporter.ddokbun.domain.plant.dto.request.RegisterPotRequest;
import com.harryporter.ddokbun.domain.plant.dto.response.MyPotReponse;
import com.harryporter.ddokbun.domain.plant.dto.response.PotDetailResponse;
import com.harryporter.ddokbun.domain.plant.dto.response.RegisterPotResponse;
import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.plant.entity.Pot;
import com.harryporter.ddokbun.domain.user.entity.User;
import com.harryporter.ddokbun.domain.user.repository.UserRepository;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;
import org.springframework.util.concurrent.ListenableFutureCallback;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service
public class PotService {

    private final PotRepository potRepository;
    private final UserRepository userRepository;
    private final PlantRepository plantRepository;
    private final WaterApplyRepository waterApplyRepository;
    private  final PotLogRepository potLogRepository;
    private final WaterApplyUtil waterApplyUtil;

    @Transactional
    public void producePot(String potSerial){
        if (potRepository.existsByPotSerial(potSerial)){
            throw new GeneralException(ErrorCode.BAD_REQUEST, "이미 존재하는 화분입니다. 화분을 삭제하고 등록해주세요");
        }
        Pot potEntity = new Pot();
        potEntity.setPotSerial(potSerial);
        potRepository.save(potEntity);
    }

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

        // 이 화분이 존재하는 화분인지 확인
        Pot pot = potRepository.findByPotSerial(registerPotRequest.getPotSerial()).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND, "존재하지 않는 화분입니다. 시리얼 넘버를 확인해주세요")
        );
        // 등록된 화분인지 아닌지 확인
        if (pot.getUser() != null) {
            throw new GeneralException(ErrorCode.BAD_REQUEST, "이미 등록된 화분입니다. 등록을 해제하고 화분을 등록해주세요.");
        }

        // 문제가 없으면 화분 등록하기
        RegisterPotResponse registerPotResponse = new RegisterPotResponse(registerPotRequest.getPotSerial());
        pot.potChange(registerPotRequest, user, plant);
        potRepository.save(pot);

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
        // 등록된 화분인지 아닌지를 확인
        if (pot.getUser() == null){
            throw new GeneralException(ErrorCode.BAD_REQUEST, "등록된 화분이 아닙니다.");
        }
        // 화분이 존재하면 삭제
        else if (pot.getUser().getUserSeq().equals(userSeq)){
            //여기에 유저만 null로 바꾸는게 아니라 log 값들을 다 삭제해야하는 거
            pot.setUser(null);
            potRepository.save(pot);
            waterApplyRepository.deleteAllByPot_PotSerial(potSerial);
            potLogRepository.deleteAllByPot_PotSerial(potSerial);
        }
        // 그것도 아니면 자신의 화분이 아닌것
        else {
            throw new GeneralException(ErrorCode.BAD_REQUEST, "당신의 화분이 아닙니다");
        }
    }

    //물을 준다.
    @Transactional
    public void applyWater(String potSerial, Long userSeq){
        User user = userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다.")
        );
        // potSerial로 통해서 화분 불러오기
        Pot potEntity = potRepository.findByPotSerial(potSerial).orElseThrow(
                () -> new GeneralException(ErrorCode.NOT_FOUND)
        );


        log.info("현재 화분 Entity와 유저 받기 :: Pot : {}, userSeq : {}", potEntity, userSeq);

        if (potEntity.getUser().getUserSeq().equals(userSeq)){
            log.info("물주는 서비스 진입성공");
            potEntity.potWaterApllyChange(LocalDate.now());

            //카프카 브로커로 모터 동작하라고 알려준다.
            boolean result = waterApplyUtil.sendMotorAction(MotorActionDto.of(potSerial),
                    new ListenableFutureCallback<SendResult<String, String>>() {
                        @Override
                        public void onFailure(Throwable ex) {
                            log.info("{} : {}",ex.getMessage(),ex.getCause().toString());
                        }

                        @Override
                        public void onSuccess(SendResult<String, String> result) {
                            WaterApply waterApply = new WaterApply(potEntity);
                            log.info("물 Apply table 생성 {}", waterApply);
                            waterApplyRepository.save(waterApply);
                        }
                    });

            if(result == false){
                throw new GeneralException(ErrorCode.EXTERNAL_SERVICE_ACCESS_ERROR,"카프카 서비스 이용 중 에러");
            }

            //WaterApply waterApply = new WaterApply(potEntity);
            //log.info("물 Apply table 생성 {}", waterApply);
            //waterApplyRepository.save(waterApply);
        } else {
            throw new GeneralException(ErrorCode.BAD_REQUEST, "당신의 화분이 아닙니다");
        }
    }

    @Transactional
    public void changeWaterApplyMethod(String potSerial, int waterPeriod, Long userSeq) {

        User user = userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다.")
        );

        Pot potEntity = potRepository.findByPotSerial(potSerial).orElseThrow(
                () -> new GeneralException(ErrorCode.NOT_FOUND)
        );

        // getUser에서 Null이 발생할 수 있기는 하나.
        if (potEntity.getUser().getUserSeq().equals(userSeq)){
            // 화분의 자동, 수동을 바꾸기
            if (potEntity.getIsAuto().equals("Y")) {
                potEntity.setIsAuto("N");
                potEntity.setWaterPeriod(0);
            }

            else {
                if(waterPeriod == 0){
                    throw new GeneralException(ErrorCode.BAD_REQUEST, "물 주기 설정 시 0으로 설정할 수 없습니다.");
                }
                potEntity.setIsAuto("Y");
                potEntity.setWaterPeriod(waterPeriod);
            }

            potRepository.save(potEntity);

        } else {
            throw new GeneralException(ErrorCode.BAD_REQUEST, "당신의 화분이 아닙니다");
        }

    }

    @Transactional
    public List<MyPotReponse> myPot(Long userSeq) {
        User user = userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다.")
        );
        log.info("나의화분{}", userSeq);
        List<Pot> pots = user.getPots();
        log.info("화분리스트{}", pots);
        return pots.stream().map(pot -> MyPotReponse.of(pot)).collect(Collectors.toList());
    }

    @Transactional
    public PotDetailResponse potDetail(String potSerial, Long userSeq) {
        User user = userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다.")
        );
        // potSerial로 통해서 화분 불러오기
        Pot potEntity = potRepository.findByPotSerial(potSerial).orElseThrow(
                () -> new GeneralException(ErrorCode.NOT_FOUND)
        );
        if (!potEntity.getUser().getUserSeq().equals(userSeq)) {
            throw new GeneralException(ErrorCode.BAD_REQUEST);
        }
        return PotDetailResponse.of(potEntity);

    }

    public List<LocalDate> waterApplies(String potSerial, Integer year, Integer month, Long userSeq){
        User user = userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다.")
        );
        // potSerial로 통해서 화분 불러오기
        Pot potEntity = potRepository.findByPotSerial(potSerial).orElseThrow(
                () -> new GeneralException(ErrorCode.NOT_FOUND)
        );
        if (!potEntity.getUser().getUserSeq().equals(userSeq)) {
            throw new GeneralException(ErrorCode.BAD_REQUEST);
        }

        String firstDate = year + "-" + month + "-01" ;
        LocalDate fDate = LocalDate.parse(firstDate);
        LocalDate lDate = fDate.withDayOfMonth(fDate.lengthOfMonth());

        List<LocalDate> dateList = waterApplyRepository.findPotWaterLog(potSerial, fDate, lDate);

        return dateList;
    }

    static class Callback implements ListenableFutureCallback<SendResult<String, String>>{

        @Override
        public void onFailure(Throwable ex) {
            log.info("{} : {}",ex.getMessage(),ex.getCause().toString());
        }

        @Override
        public void onSuccess(SendResult<String, String> result) {
            log.info("메세지 보내기 성공 : {}",result.toString());
        }
    }

}
