package com.harryporter.ddokbun.domain.user.service;

import com.harryporter.ddokbun.domain.user.dto.UserSocialDto;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.domain.user.entity.User;
import com.harryporter.ddokbun.domain.user.repository.UserRepository;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;
import java.util.Arrays;

@RequiredArgsConstructor
@Slf4j
@Service
public class UserService {
    private final UserRepository userRepository;
    @Transactional
    public UserDto signup(UserSocialDto profileDto){
        User user = userRepository.findByUserEmail(profileDto.getUserEmail()).orElse(null);
        if(user==null){
            profileDto.setUserNickname(randomNickname());
            user=userRepository.save(profileDto.toEntity());
        }
        log.info("userSeq : {}",user.getUserSeq());
        return UserDto.convert(user);
    }

    public UserDto loadUserByUserSeq(Long userSeq) {
        User user=userRepository.findByUserSeq(userSeq).orElse(null);
        return UserDto.convert(user);
    }

    public UserDto updateNickname(Long userSeq,String nickname){
        User user=userRepository.findByUserSeq(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다."));
        log.info("User Seq  :  {}",user.getUserSeq());

        log.info("변경 전 User Nickname  :  {}",user.getUserNickname());
        user.setUserNickname(nickname);
        try {
            user = userRepository.save(user);
        }catch (Exception e){
            throw new GeneralException(ErrorCode.DUPPLICATE_INPUT,"이미 등록된 닉네임입니다.");
        }
        log.info("변경 후 User Nickname  :  {}",user.getUserNickname());
        return UserDto.convert(user);
    }

    public String randomNickname(){
        List<String> first = Arrays.asList("행복한","즐거운","기분 좋은","이웃집","커피장인","우리집");
        List<String> second = Arrays.asList("원숭이","코끼리","사자","아이스크림","콜라","사이다","꿀벌","말벌");

        Collections.shuffle(first);
        Collections.shuffle(second);

        String nickName= first.get(0)+" "+second.get(0);
        while(userRepository.findByUserNickname(nickName)!=null){
            Collections.shuffle(first);
            Collections.shuffle(second);
            nickName= first.get(0)+second.get(0);
        };
        return nickName;

    }

}
