package com.harryporter.ddokbun.domain.alarm.service;


import com.harryporter.ddokbun.domain.alarm.dto.AlarmMessageDto;
import com.harryporter.ddokbun.domain.alarm.entity.AlarmLog;
import com.harryporter.ddokbun.domain.alarm.repository.AlarmLogRepository;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.domain.user.entity.User;
import com.harryporter.ddokbun.domain.user.repository.UserRepository;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import com.harryporter.ddokbun.utils.fcm.FCMMessageDto;
import com.harryporter.ddokbun.utils.fcm.FCMService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class AlarmService {


    private FCMService fcmService;
    private AlarmLogRepository alarmLogRepository;
    private final UserRepository userRepository;
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

    @Transactional
    public boolean sendAlarmToUser(AlarmMessageDto alarmMessageDto, long userSeq){

        User user = userRepository.findById(userSeq).orElse(null);
        if(user == null){
            return false;
        }
        String targetToken = user.getAlarmToken();
        if (targetToken == null) {
            return  false;
        }

        fcmService.sendMessage(getFcmMessage(targetToken,alarmMessageDto));

        AlarmLog alarmLog = new AlarmLog(userSeq,alarmMessageDto.getTitle(),alarmMessageDto.getBody());

        alarmLogRepository.save(alarmLog);


        return true;
    }

    private FCMMessageDto getFcmMessage(String token,String title,String body){
        return FCMMessageDto.builder().title(title).token(token).body(body).build();
    }
    private FCMMessageDto getFcmMessage(String token,AlarmMessageDto alarmMessageDto){
        return this.getFcmMessage(token,alarmMessageDto.getTitle(),alarmMessageDto.getBody());
    }
}
