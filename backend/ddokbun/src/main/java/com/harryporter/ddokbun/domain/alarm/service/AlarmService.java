package com.harryporter.ddokbun.domain.alarm.service;


import com.harryporter.ddokbun.domain.alarm.dto.AlarmMessageDto;
import com.harryporter.ddokbun.domain.alarm.entity.AlarmLog;
import com.harryporter.ddokbun.domain.alarm.repository.AlarmLogCustomRepository;
import com.harryporter.ddokbun.domain.alarm.repository.AlarmLogRepository;
import com.harryporter.ddokbun.domain.alarm.res.AlarmLogResponse;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.domain.user.entity.User;
import com.harryporter.ddokbun.domain.user.repository.UserRepository;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import com.harryporter.ddokbun.utils.fcm.FCMMessageDto;
import com.harryporter.ddokbun.utils.fcm.FCMService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class AlarmService {


    private final FCMService fcmService;
    private final AlarmLogRepository alarmLogRepository;
    private final UserRepository userRepository;
    private final AlarmLogCustomRepository alarmLogCustomRepository;
    //사용자의 알람을 변경한다.
    @Transactional
    public void setToken(String token, UserDto principal) {

        User user =   userRepository.findById(principal.getUserSeq()).orElseThrow(()->new GeneralException(ErrorCode.NOT_FOUND));
        String before = user.getAlarmToken();
        if(token.compareTo(token) != 0){
            user.changeAlarmToken(token);
            fcmService.sendMessage(getFcmMessage(token,"알림 설정",String.format("%s님 환영합니다.")));
        }
    }

    /**
     *
     * @param alarmMessageDto
     * @param userSeq
     * @return 성공 시 true, 실패시 false
     */
    @Transactional(propagation = Propagation.REQUIRES_NEW) //해당 트랜잭션이 실패해도 이전 트랜잭션은 실패안하게
    public boolean sendAlarmToUser(AlarmMessageDto alarmMessageDto, long userSeq){

        User user = userRepository.findById(userSeq).orElse(null);
        if(user == null){
            log.info("알람 전송 중 유저 찾기 에러");
            return false;
        }
        String targetToken = user.getAlarmToken();
        if (targetToken == null) {
            log.info("알람을 전송할 유저에게 토큰이 없음");
            return  false;
        }

        boolean result = fcmService.sendMessage(getFcmMessage(targetToken,alarmMessageDto));

        log.info("알람 전송 성공 여부 : {}",result ? "성공":"실패");

        AlarmLog alarmLog = new AlarmLog(userSeq,alarmMessageDto.getTitle(),alarmMessageDto.getBody());

        alarmLogRepository.save(alarmLog);


        return result;
    }


    private FCMMessageDto getFcmMessage(String token,String title,String body){
        return FCMMessageDto.builder().title(title).token(token).body(body).build();
    }
    private FCMMessageDto getFcmMessage(String token,AlarmMessageDto alarmMessageDto){
        return this.getFcmMessage(token,alarmMessageDto.getTitle(),alarmMessageDto.getBody());
    }

    @Transactional(readOnly = true)
    public List<AlarmLogResponse> getAlarmLogsByUserSeq(Long lastSeq, Long userSeq) {
        List<AlarmLogResponse> alarmLogResponseList=  alarmLogCustomRepository.getAlarmLogsByUserSeq(lastSeq,userSeq);
        return  alarmLogResponseList;
    }
}
