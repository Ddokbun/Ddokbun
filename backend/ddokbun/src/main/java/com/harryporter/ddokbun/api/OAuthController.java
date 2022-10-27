package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.domain.oauth.service.GoogleService;
import com.harryporter.ddokbun.domain.oauth.service.KakaoService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/user")
@RequiredArgsConstructor
@RestController
@Api(tags ={" OAuth2 소셜 로그인 API"})
public class OAuthController {

    private final GoogleService googleService;
    private final KakaoService kakaoService;

    //유저가 서비스 이용을 위해 로그인한다.
    @GetMapping("/login/oauth/{providerType}")
    public ResponseEntity<String> login(@PathVariable String providerType, @RequestParam String code){
        String response="";
        if(providerType.equals("google")){
     //       response=googleService.googleLogin();
        }else if(providerType.equals("kakao")){
            response=kakaoService.kakaoLogin(code);
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }







}
