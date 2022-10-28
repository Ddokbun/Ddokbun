package com.harryporter.ddokbun.domain.user.dto;

import com.harryporter.ddokbun.domain.auth.dto.KakaoProfile;
import com.harryporter.ddokbun.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserSocialDto {
    private String userNickname;
    private String userEmail;

    public UserSocialDto(KakaoProfile kakaoProfile) {
        this.userNickname = kakaoProfile.getProperties().getNickname();
        this.userEmail = kakaoProfile.getKakao_account().getEmail();
    }

    public User toEntity(){
        return User.builder()
                .userNickname(userNickname)
                .userEmail(userEmail)
                .userRole("ROLE_USER")
                .createdTime(new Date())
                .updatedTime(new Date())
                .build();
    }
}
