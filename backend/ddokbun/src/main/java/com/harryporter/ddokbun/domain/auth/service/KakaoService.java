package com.harryporter.ddokbun.domain.auth.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.harryporter.ddokbun.domain.auth.dto.KakaoToken;
import com.harryporter.ddokbun.domain.auth.dto.KakaoProfile;
import com.harryporter.ddokbun.domain.user.dto.UserSocialDto;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.domain.user.service.UserService;
import com.harryporter.ddokbun.utils.auth.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
@Slf4j
public class KakaoService {
    private final UserService userService;
    public String kakaoLogin(String code){
        KakaoToken accessToken = getKakaoAuthTokenByCode(code);
        KakaoProfile kakaoProfile = getKakaoProfileByAccessToken(accessToken);

        UserDto userDto = userService.signup(new UserSocialDto(kakaoProfile));
        log.info("user nickname : {}",userDto.getUserNickname());
        log.info("user email : {}",userDto.getUserEmail());

        String jwtToken = JwtTokenProvider.generateJwtToken(userDto);

        return jwtToken;
    }

    private KakaoToken getKakaoAuthTokenByCode(String code){
        try{
            // HTTP Header 생성
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-type","application/x-www-form-urlencoded;charset=utf-8");

            // HTTP Body 생성
            MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
            body.add("grant_type","authorization_code");
            body.add("client_id","e7b3aeb0998dc77e6832174667e50b90");
            body.add("redirect_uri","http://localhost:8080/api/user/login/oauth/kakao");
            body.add("client_secret","eVwrpF6JJYcPVSRthjAuuWS5yD0vU4oU");
            body.add("code",code);

            // HTTP 요청 보내기 (POST 방식으로)
            HttpEntity<MultiValueMap<String,String>> kakaoTokenRequest = new HttpEntity<>(body, headers);
            RestTemplate rt1 = new RestTemplate();
            ResponseEntity<String> response = rt1.exchange(
                    "https://kauth.kakao.com/oauth/token",
                    HttpMethod.POST,
                    kakaoTokenRequest,
                    String.class
            );

            // HTTP 응답 (JSON) -> 액세스 토큰 파싱
            String responseBody = response.getBody();
            ObjectMapper objectMapper = new ObjectMapper();
            KakaoToken kakaoOAuthToken = objectMapper.readValue(responseBody, KakaoToken.class);

            return kakaoOAuthToken;

        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return null;
        }
    }

    private KakaoProfile getKakaoProfileByAccessToken(KakaoToken oAuthToken){
        // HTTP Header 생성
        HttpHeaders headers2 = new HttpHeaders();
        headers2.add("Authorization", "Bearer "+oAuthToken.getAccess_token());
        headers2.add("Content-type","application/x-www-form-urlencoded;charset=utf-8");

        // HTTP 요청 보내기 (POST 방식으로)
        HttpEntity<MultiValueMap<String,String>> kakaoProfileRequest = new HttpEntity<>(headers2);
        RestTemplate rt2 = new RestTemplate();
        ResponseEntity<String> response2 = rt2.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoProfileRequest,
                String.class
        );

        ObjectMapper objectMapper = new ObjectMapper();
        KakaoProfile kakaoProfile = null;
        try {
            kakaoProfile = objectMapper.readValue(response2.getBody(),KakaoProfile.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return kakaoProfile;
    }
}
