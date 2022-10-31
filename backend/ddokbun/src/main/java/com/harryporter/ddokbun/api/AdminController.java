package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.plant.dto.PlantDto;
import com.harryporter.ddokbun.domain.plant.service.PlantService;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.domain.user.service.UserService;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import com.harryporter.ddokbun.utils.auth.JwtTokenUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@RequestMapping("/admin")
@RequiredArgsConstructor
@RestController
@Api(tags ={" 관리자 API"})
public class AdminController {

    private final JwtTokenUtils jwtTokenUtils;
    private final PlantService plantService;
    private final UserService userService;

    @ApiOperation(value = "식물 데이터 조회 (Test용 1번 데이터 조회)")
    @GetMapping ("/plant")
    public ResponseEntity<?> getPlant(@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 접속 완료");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success",plantService.getPlant());
        return new ResponseEntity<>(res, HttpStatus.OK);
    }


    @ApiOperation(value = "식물 데이터 등록")
    @PostMapping("/plant")
    public ResponseEntity<?> insertPlant(@RequestBody PlantDto plantDto,@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 접속 완료");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success",plantService.insertPlant(plantDto));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "식물 데이터 변경")
    @PutMapping("/plant")
    public ResponseEntity<?> updatePlant(@RequestBody PlantDto plantDto,@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 접속 완료");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success",plantService.updatePlant(plantDto));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "상품 등록")
    @PostMapping("/product")
    public ResponseEntity<?> insertProduct(@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success","상품 등록");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "상품 변경")
    @PutMapping("/product")
    public ResponseEntity<?> updateProduct(@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success","상품 변경");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "상품 삭제")
    @DeleteMapping("/product")
    public ResponseEntity<?> deleteProduct(@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success","상품 삭제");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "사용자 주문내역 상태 변경")
    @PutMapping("/order/{orderSeq}")
    public ResponseEntity<?> updateOrderStatus(@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success","사용자 주문내역 상태 변경");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}