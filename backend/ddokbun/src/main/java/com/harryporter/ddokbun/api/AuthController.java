package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
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

    @ApiOperation(value = "소셜 로그인 Kakao, Google")
    @GetMapping("/login/oauth/{providerType}")
    public ResponseEntity<?> login(
            @Parameter(description = "[kakao], [google] 입력") @PathVariable String providerType,
            @Parameter(description = "인가 코드 입력") @RequestParam String code
    ){
        log.info("provider : {}",providerType);

        String jwtToken="";
        if(providerType.equals("google")){
     //       jwtToken=googleService.googleLogin(code);
        } else if(providerType.equals("kakao")){
            jwtToken=kakaoService.kakaoLogin(code);
        }

        log.info("jwtToken : {}",jwtToken);
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Jwt 토큰이 발급되었습니다",jwtToken);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}
