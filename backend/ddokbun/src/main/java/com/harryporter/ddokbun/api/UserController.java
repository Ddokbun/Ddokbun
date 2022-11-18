package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.domain.user.service.UserService;
import com.harryporter.ddokbun.utils.auth.JwtTokenUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletRequest;


@Slf4j
@RequestMapping("/user")
@RequiredArgsConstructor
@RestController
@Api(tags ={" 사용자 정보 API"})
public class UserController {
    private final UserService userService;
    private final JwtTokenUtils jwtTokenUtils;
    
    @ApiOperation(value = "사용자 정보 조회")
    @GetMapping
    public ResponseEntity<?> getUserInfo(@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        log.info("사용자 정보 조회 API :: userSeq : {}",userDto.getUserSeq());
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success",userService.loadUserByUserSeq(userDto.getUserSeq()));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "닉네임 변경")
    @PutMapping
    public ResponseEntity<?> updateNickname(String nickname,@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        log.info("닉네임 변경 API :: userSeq : {}",userDto.getUserSeq());
        String result = userService.updateNickname(userDto.getUserSeq(),nickname);
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success",result);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}
