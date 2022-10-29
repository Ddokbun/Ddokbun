package com.harryporter.ddokbun.domain.auth.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.harryporter.ddokbun.domain.auth.dto.*;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.domain.user.dto.UserSocialDto;
import com.harryporter.ddokbun.domain.user.service.UserService;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import com.harryporter.ddokbun.utils.auth.JwtTokenUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;

@Service
@RequiredArgsConstructor
@Slf4j
public class GoogleService {
    private final UserService userService;
    public OAuthRes googleLogin(String code){
        log.info("Login 파이프라인 진입 & 받은 인가코드 : {}",code);
        String decodedCode="";

        try {
            decodedCode = java.net.URLDecoder.decode(code, StandardCharsets.UTF_8.name());
        } catch (UnsupportedEncodingException e) {

        }

        log.info("해독된 인가코드 : {}",decodedCode);
        GoogleAccessToken accessToken = getGoogleAuthTokenByCode(decodedCode);

        log.info("access Token : {}",accessToken.getAccess_token());

        GoogleProfile googleProfile = getGoogleProfileByAccessToken(accessToken);

        UserDto userDto = userService.signup(new UserSocialDto(googleProfile));
        log.info("user nickname : {}",userDto.getUserNickname());
        log.info("user email : {}",userDto.getUserEmail());

        String jwtToken = JwtTokenUtils.generateJwtToken(userDto);
        OAuthRes res = new OAuthRes(jwtToken,userDto.getUserSeq());

        return res;
    }

    private GoogleAccessToken getGoogleAuthTokenByCode(String code){
        try{
            // HTTP Header 생성
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-type","application/x-www-form-urlencoded;charset=utf-8");

            // HTTP Body 생성
            MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
            body.add("grant_type","authorization_code");
            body.add("client_id","127690755793-5kgtvm8bmt7dhacov2qitf3d90h62reb.apps.googleusercontent.com");
            body.add("redirect_uri","https://k7d208.p.ssafy.io/");
            body.add("client_secret","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");
            body.add("code",code);

            // HTTP 요청 보내기 (POST 방식으로)
            HttpEntity<MultiValueMap<String,String>> googleTokenRequest = new HttpEntity<>(body, headers);
            RestTemplate rt1 = new RestTemplate();
            ResponseEntity<String> response;
            try{
                response = rt1.exchange(
                        "https://oauth2.googleapis.com/token",
                        HttpMethod.POST,
                        googleTokenRequest,
                        String.class
                );
            }catch (HttpClientErrorException e){
                throw new GeneralException(ErrorCode.VALIDATION_ERROR,"Authorization code를 확인하세요.");
            }


            // HTTP 응답 (JSON) -> 액세스 토큰 파싱
            String responseBody = response.getBody();
            ObjectMapper objectMapper = new ObjectMapper();
            GoogleAccessToken googleOAuthToken = objectMapper.readValue(responseBody, GoogleAccessToken.class);

            return googleOAuthToken;

        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return null;
        }
    }

    private GoogleProfile getGoogleProfileByAccessToken(GoogleAccessToken oAuthToken){
        // HTTP Header 생성
        HttpHeaders headers2 = new HttpHeaders();
        headers2.add("Authorization", "Bearer "+oAuthToken.getAccess_token());
        headers2.add("Content-type","application/x-www-form-urlencoded;charset=utf-8");

        // HTTP 요청 보내기 (POST 방식으로)
        HttpEntity<String> googleProfileRequest = new HttpEntity(headers2);
        RestTemplate rt2 = new RestTemplate();
        ResponseEntity<String> response2 = rt2.exchange(
                "https://oauth2.googleapis.com/tokeninfo",
                HttpMethod.POST,
                googleProfileRequest,
                String.class
        );

        ObjectMapper objectMapper = new ObjectMapper();
        GoogleProfile googleProfile = null;
        try {
            googleProfile = objectMapper.readValue(response2.getBody(),GoogleProfile.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return googleProfile;
    }
}
