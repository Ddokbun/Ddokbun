package com.harryporter.ddokbun.domain.user.service;

import com.harryporter.ddokbun.domain.user.dto.UserSocialDto;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.domain.user.entity.User;
import com.harryporter.ddokbun.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Slf4j
@Service
public class UserService {
    private final UserRepository userRepository;
    @Transactional
    public UserDto signup(UserSocialDto profileDto){
        User user = userRepository.findByUserEmail(profileDto.getUserEmail()).orElse(null);
        if(user==null){
            user=userRepository.save(profileDto.toEntity());
        }
        log.info("userSeq : {}",user.getUserSeq());
        return UserDto.convert(user);
    }

    public UserDto loadUserByUserSeq(Long userSeq) {
        User user=userRepository.findByUserSeq(userSeq).orElse(null);
        return UserDto.convert(user);
    }

}
