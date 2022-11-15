package com.harryporter.ddokbun.domain.auth.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.harryporter.ddokbun.domain.auth.dto.KakaoAccessToken;
import com.harryporter.ddokbun.domain.auth.dto.KakaoProfile;
import com.harryporter.ddokbun.domain.auth.dto.OAuthRes;
import com.harryporter.ddokbun.domain.user.dto.UserSocialDto;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.domain.user.service.UserService;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import com.harryporter.ddokbun.utils.auth.JwtTokenUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
@Slf4j
public class KakaoService {
    private final UserService userService;
    @Value("${spring.security.oauth2.client.registration.kakao.client-id}")
    private String clientId;
    @Value("${spring.security.oauth2.client.registration.kakao.client-secret}")
    private String clientSecret;
    @Value("${spring.security.oauth2.client.registration.kakao.redirect-uri}")
    private String redirectUri;
    @Value("${spring.security.oauth2.client.provider.kakao.token_uri}")
    private String tokenUri;

    @Value("${spring.security.oauth2.client.provider.kakao.user-info-uri}")
    private String userInfoUri;

    public OAuthRes kakaoLogin(String code){
        log.info("카카오 로그인 파이프라인 진입 :: 인가 코드 : {}", code);
        KakaoAccessToken accessToken = getKakaoAuthTokenByCode(code);
        if(accessToken==null)
            throw new GeneralException(ErrorCode.DATA_ACCESS_ERROR,"Access Token을 받아오지 못했습니다.");

        KakaoProfile kakaoProfile = getKakaoProfileByAccessToken(accessToken);
        if(kakaoProfile==null)
            throw new GeneralException(ErrorCode.DATA_ACCESS_ERROR,"카카오 프로필을 받아오지 못했습니다.");

        if(kakaoProfile.getKakao_account().getEmail()==null){
            log.info("이메일 미등록 오류 :: Access Token : {}", accessToken);
            kakaoDisconnect(accessToken);
            throw new GeneralException(ErrorCode.NOT_FOUND,"사용자 이메일을 찾을 수 없습니다. 이메일 제공에 동의해주세요");
        }

        UserDto userDto = userService.signup(new UserSocialDto(kakaoProfile));
        String jwtToken = JwtTokenUtils.generateJwtToken(userDto);
        OAuthRes res = new OAuthRes(jwtToken,userDto.getUserSeq());
        return res;
    }

    private KakaoAccessToken getKakaoAuthTokenByCode(String code){
        log.info("카카오 Access Token 받아오기 :: 인가 코드 : {}", code);
        try{
            // HTTP Header 생성
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-type","application/x-www-form-urlencoded;charset=utf-8");

            // HTTP Body 생성
            MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
            body.add("grant_type","authorization_code");
            body.add("client_id",clientId);
            body.add("redirect_uri",redirectUri);
            body.add("client_secret",clientSecret);
            body.add("code",code);

            // HTTP 요청 보내기 (POST 방식으로)
            HttpEntity<MultiValueMap<String,String>> kakaoTokenRequest = new HttpEntity<>(body, headers);
            RestTemplate rt1 = new RestTemplate();
            ResponseEntity<String> response;
            try{
                response = rt1.exchange(
                        tokenUri,
                        HttpMethod.POST,
                        kakaoTokenRequest,
                        String.class
                );
            }catch (HttpClientErrorException e){
                throw new GeneralException(ErrorCode.VALIDATION_ERROR,"Authorization code를 확인하세요.");
            }


            // HTTP 응답 (JSON) -> 액세스 토큰 파싱
            String responseBody = response.getBody(); //"{"result" : result}"
            ObjectMapper objectMapper = new ObjectMapper();
            KakaoAccessToken kakaoOAuthToken = objectMapper.readValue(responseBody, KakaoAccessToken.class);

            return kakaoOAuthToken;

        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return null;
        }
    }

    private KakaoProfile getKakaoProfileByAccessToken(KakaoAccessToken oAuthToken){
        log.info("카카오 프로필 받아오기 :: Access Token : {}", oAuthToken.getAccess_token());
        // HTTP Header 생성
        HttpHeaders headers2 = new HttpHeaders();
        headers2.add("Authorization", "Bearer "+oAuthToken.getAccess_token());
        headers2.add("Content-type","application/x-www-form-urlencoded;charset=utf-8");

        // HTTP 요청 보내기 (POST 방식으로)
        HttpEntity<String> kakaoProfileRequest = new HttpEntity(headers2);
        RestTemplate rt2 = new RestTemplate();
        ResponseEntity<String> response2 = rt2.exchange(
                userInfoUri,
                HttpMethod.POST,
                kakaoProfileRequest,
                String.class
        );

        ObjectMapper objectMapper = new ObjectMapper();
        KakaoProfile kakaoProfile = null;
        try {
            kakaoProfile = objectMapper.readValue(response2.getBody(),KakaoProfile.class);
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return kakaoProfile;
    }

    private String kakaoDisconnect(KakaoAccessToken oAuthToken){
        log.info("카카오 연결 해제 :: Access Token : {}", oAuthToken.getAccess_token());
        // HTTP Header 생성
        HttpHeaders headers3 = new HttpHeaders();
        headers3.add("Authorization", "Bearer "+oAuthToken.getAccess_token());
        headers3.add("Content-type","application/x-www-form-urlencoded;charset=utf-8");

        // HTTP 요청 보내기 (POST 방식으로)
        HttpEntity<String> kakaoDisconnect = new HttpEntity(headers3);
        RestTemplate rt2 = new RestTemplate();
        ResponseEntity<String> response2 = rt2.exchange(
                "https://kapi.kakao.com/v1/user/unlink",
                HttpMethod.POST,
                kakaoDisconnect,
                String.class
        );

        return "Success";
    }
}
