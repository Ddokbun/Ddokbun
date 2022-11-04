package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.auth.dto.OAuthRes;
import com.harryporter.ddokbun.domain.auth.service.GoogleService;
import com.harryporter.ddokbun.domain.auth.service.KakaoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/user")
@RequiredArgsConstructor
@RestController
@Api(tags ={" 소셜 로그인 API"})
public class AuthController {

    private final GoogleService googleService;
    private final KakaoService kakaoService;

    @ApiOperation(value = "Kakao 로그인")
    @GetMapping("/login/oauth/kakao")
    public ResponseEntity<?> loginByKakao(@Parameter(description = "인가 코드 입력") @RequestParam String code){
        log.info("카카오 :: 카카오 로그인 API");
        OAuthRes result=kakaoService.kakaoLogin(code);
        log.info("JWT 토큰 발행 : {}",result.getJwtToken());
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("jwt 토큰이 발급되었습니다",result);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "Google 로그인")
    @GetMapping("/login/oauth/google")
    public ResponseEntity<?> loginByGoogle(@Parameter(description = "인가 코드 입력") @RequestParam String code){
        log.info("구글 :: 구글 로그인 API");
        OAuthRes result=googleService.googleLogin(code);
        log.info("JWT 토큰 발행 : {}",result.getJwtToken());
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("jwt 토큰이 발급되었습니다",result);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
