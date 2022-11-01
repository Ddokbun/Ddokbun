package com.harryporter.ddokbun.domain.plant.service;

import com.harryporter.ddokbun.domain.plant.dto.response.PotLightLogResponse;
import com.harryporter.ddokbun.domain.plant.dto.response.PotTemperatureLogResponse;
import com.harryporter.ddokbun.domain.plant.entity.Pot;
import com.harryporter.ddokbun.domain.plant.entity.PotLog;
import com.harryporter.ddokbun.domain.plant.repository.PotLogRepository;
import com.harryporter.ddokbun.domain.plant.repository.PotRepository;
import com.harryporter.ddokbun.domain.user.entity.User;
import com.harryporter.ddokbun.domain.user.repository.UserRepository;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Slf4j
@Service
public class PotLogService {
    private final PotLogRepository potLogRepository;
    private final PotRepository potRepository;
    private final UserRepository userRepository;
    public Long addLog(String potSerial) {

        Pot potEntity = potRepository.findByPotSerial(potSerial).orElseThrow(
                () -> new GeneralException(ErrorCode.NOT_FOUND)
        );

        PotLog potLog = new PotLog(potEntity);
        log.info("화분로그 {}",potLog);
        potLogRepository.save(potLog);
        return potLog.getLogSeq();
    }

    public List<PotTemperatureLogResponse> potTemperatureLogService(String potSerial, Long userSeq){
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

        List<PotLog> potLogList = potLogRepository.findTop30ByPot_PotSerialOrderByCreatedTimeDesc(potSerial);
        log.info("화분 온도 로그를 받아오는데 성공했습니다.{}", potLogList);
        return potLogList.stream().map(PotTemperatureLogResponse::of).collect(Collectors.toList());
    }

    public List<PotLightLogResponse> potLightLogService(String potSerial, Long userSeq){
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

        List<PotLog> potLogList = potLogRepository.findTop30ByPot_PotSerialOrderByCreatedTimeDesc(potSerial);
        log.info("화분 온도 로그를 받아오는데 성공했습니다.{}", potLogList);
        return potLogList.stream().map(PotLightLogResponse::of).collect(Collectors.toList());
    }


}
