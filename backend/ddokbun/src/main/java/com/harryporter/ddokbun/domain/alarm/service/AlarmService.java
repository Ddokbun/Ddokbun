package com.harryporter.ddokbun.domain.alarm.service;


import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.domain.user.entity.User;
import com.harryporter.ddokbun.domain.user.repository.UserRepository;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class AlarmService {


    private final UserRepository userRepository;
    //사용자의 알람을 변경한다.
    @Transactional
    public void setToken(String token, UserDto principal) {

        User user =   userRepository.findById(principal.getUserSeq()).orElseThrow(()->new GeneralException(ErrorCode.NOT_FOUND));
        user.changeAlarmToken(token);

    }
}
