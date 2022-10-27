package com.harryporter.ddokbun.domain.oauth.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.harryporter.ddokbun.domain.user.dto.KakaoOAuthToken;
import com.harryporter.ddokbun.domain.user.dto.KakaoProfile;
import com.harryporter.ddokbun.domain.user.dto.SocialUserDto;
import lombok.RequiredArgsConstructor;
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
public class KakaoService {

    public SocialUserDto kakaoLogin(String code){
        KakaoOAuthToken accessToken = getKakaoOAuthToken(code);
        System.out.println(code);
        KakaoProfile kakaoProfile = getKakaoProfile(accessToken);
        System.out.println("dddd");
        return new SocialUserDto(kakaoProfile);
    }

    public KakaoOAuthToken getKakaoOAuthToken(String code){
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
            KakaoOAuthToken kakaoOAuthToken = objectMapper.readValue(responseBody, KakaoOAuthToken.class);

            return kakaoOAuthToken;

        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return null;
        }
    }

    public KakaoProfile getKakaoProfile(KakaoOAuthToken oAuthToken){
        // HTTP Header 생성
        HttpHeaders headers2 = new HttpHeaders();
        headers2.add("Authorization", "Bearer "+oAuthToken.getAccess_token());
        headers2.add("Content-type","application/x-www-form-urlencoded;charset=utf-8");

        // HTTP 요청 보내기 (POST 방식으로)
        HttpEntity<MultiValueMap<String,String>> kakaoProfileRequest = new HttpEntity<>(headers2);
        RestTemplate rt2 = new RestTemplate();
        System.out.println("1");
        ResponseEntity<String> response2 = rt2.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoProfileRequest,
                String.class
        );

        System.out.println("2");

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
