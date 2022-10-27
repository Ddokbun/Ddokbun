package com.harryporter.ddokbun.domain.user.service;

import com.harryporter.ddokbun.domain.user.dto.UserSocialDto;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.domain.user.entity.User;
import com.harryporter.ddokbun.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
    private final UserRepository userRepository;
    @Transactional
    public UserDto signup(UserSocialDto profileDto){
        User user = userRepository.findByUserEmail(profileDto.getUserEmail()).orElse(null);
        if(user==null){
            user=userRepository.save(profileDto.toEntity());
        }
        return UserDto.convert(user);
    }

    public UserDto loadUserByUserSeq(Long userSeq) {
        User user=userRepository.findByUserSeq(userSeq).orElse(null);
        return UserDto.convert(user);
    }

//    public UserDto getUserInfo(String address){
//        User user = userRepository.findByWalletAddress(address).orElse(null);
//        UserDto userDto = UserDto.convert(user);
//        return userDto;
//    }
//
//    public String withdrawal(String address){
//        User user = userRepository.findByWalletAddress(address)
//                .orElseThrow(() -> new UserNotFoundException("삭제할 사용자를 찾을 수 없습니다"));
//        userRepository.delete(user);
//        return "Success";
//    }
//
//    public UserDto updateUser(ReqUserUpdateDto userDto) {
//        setProfile(new ReqProfileDto(userDto.getWalletAddress(), userDto.getTokenId()));
//
//        User user = userRepository.findByWalletAddress(userDto.getWalletAddress())
//                .orElseThrow(() -> new UserNotFoundException("해당 지갑의 사용자를 찾을 수 없습니다"));
//
//        user.setUserBio(userDto.getUserBio());
//        user.setUserNickname(userDto.getUserNickname());
//        user.setUpdatedTime(new Date());
//        return UserDto.convert(userRepository.save(user));
//    }

}
