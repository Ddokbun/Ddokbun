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
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Slf4j
@Service
public class UserService {
    private final UserRepository userRepository;
    @Transactional
    public UserDto signup(UserSocialDto profileDto){
        log.info("회원가입 Service :: email : {}", profileDto.getUserEmail());
        User user = userRepository.findByUserEmail(profileDto.getUserEmail()).orElse(null);
        if(user==null){
            user=profileDto.toEntity();
            user.changeNickName(randomNickname());
            userRepository.save(user);
        }
        log.info("회원가입 Success :: userSeq : {}", profileDto.getUserEmail());
        return UserDto.convert(user);
    }

    public List<UserDto> getUserList() {
        log.info("회원 목록 조회 Service ::");
        List<User> users=userRepository.findAll();
        log.info("회원 조회 Success :: ");
        return users.stream().map(user -> UserDto.convert(user)).collect(Collectors.toList());
    }

    public UserDto loadUserByUserSeq(Long userSeq) {
        log.info("회원 조회 Service :: userSeq : {}", userSeq);
        User user=userRepository.findByUserSeq(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다."));
        log.info("회원 조회 Success :: nickname : {}", user.getUserNickname());
        return UserDto.convert(user);
    }
    public String changeUserRole(Long userSeq){
        log.info("유저 권한 변경 Service :: userSeq : {}", userSeq);
        User user=userRepository.findByUserSeq(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다."));
        if(user.getUserRole().equals("ROLE_USER"))
            user.changeUserRole("ROLE_ADMIN");
        else if(user.getUserRole().equals("ROLE_ADMIN"))
            user.changeUserRole("ROLE_USER");
        userRepository.save(user);
        
        log.info("유저 권한 변경 Success :: userRole : {}", user.getUserRole());
        return user.getUserRole();
    }


    public String updateNickname(Long userSeq,String nickname){
        log.info("닉네임 변경 Service :: userSeq : {}", userSeq);
        User user=userRepository.findByUserSeq(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다."));
        user.changeNickName(nickname);
        try {
            userRepository.save(user);
        }catch (Exception e){
            throw new GeneralException(ErrorCode.DUPPLICATE_INPUT,"이미 등록된 닉네임입니다.");
        }
        log.info("닉네임 변경 Success :: nickname : {}", user.getUserNickname());
        return "Nickname Update Success";
    }

    public String randomNickname(){
        log.info("랜덤 닉네임 생성 Start ::");
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
        log.info("랜덤 닉네임 생성 Success :: nickname : {}",nickName);
        return nickName;
    }
}
