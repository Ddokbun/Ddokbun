package com.harryporter.ddokbun.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SocialUserDto {
    private Long id;
    private String nickname;
    private String email;

    public SocialUserDto(KakaoProfile kakaoProfile) {
        this.id = id;
        this.nickname = kakaoProfile.getProperties().getNickname();
        this.email = kakaoProfile.getKakao_account().getEmail();
    }
}
