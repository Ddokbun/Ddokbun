package com.harryporter.ddokbun.domain.user.dto;

import com.harryporter.ddokbun.domain.auth.dto.GoogleProfile;
import com.harryporter.ddokbun.domain.auth.dto.KakaoProfile;
import com.harryporter.ddokbun.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserSocialDto {
    private String userNickname;
    private String userEmail;

    public UserSocialDto(KakaoProfile kakaoProfile) {
        this.userEmail = kakaoProfile.getKakao_account().getEmail();
    }

    public UserSocialDto(GoogleProfile googleProfile) {
        this.userEmail = googleProfile.getEmail();
    }

    public User toEntity(){
        return User.builder()
                .userNickname(userNickname)
                .userEmail(userEmail)
                .userRole("ROLE_USER")
                .build();
    }
}
