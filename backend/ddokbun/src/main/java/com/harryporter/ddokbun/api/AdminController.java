package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.user.service.UserService;
import com.harryporter.ddokbun.utils.auth.JwtTokenUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@RequestMapping("/admin")
@RequiredArgsConstructor
@RestController
@Api(tags ={" 관리자 API"})
public class AdminController {
    private final JwtTokenUtils jwtTokenUtils;

    @ApiOperation(value = "식물 데이터 등록")
    @PostMapping("/plant")
    public ResponseEntity<?> insertPlant(HttpServletRequest request){
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success","식물 데이터 등록");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "식물 데이터 변경")
    @PostMapping("/plant")
    public ResponseEntity<?> updatePlant(HttpServletRequest request){
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success","식물 데이터 변경");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "상품 등록")
    @PostMapping("/product")
    public ResponseEntity<?> insertProduct(HttpServletRequest request){
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success","상품 등록");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "상품 변경")
    @PostMapping("/product")
    public ResponseEntity<?> updateProduct(HttpServletRequest request){
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success","상품 변경");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "상품 삭제")
    @DeleteMapping("/product")
    public ResponseEntity<?> deleteProduct(HttpServletRequest request){
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success","상품 삭제");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "사용자 주문내역 상태 변경")
    @PutMapping("/order/{orderSeq}")
    public ResponseEntity<?> updateOrderStatus(HttpServletRequest request){
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success","사용자 주문내역 상태 변경");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}