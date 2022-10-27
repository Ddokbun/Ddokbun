package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.cart.dto.request.CartEnrollReq;
import com.harryporter.ddokbun.domain.cart.service.CartService;
import com.harryporter.ddokbun.domain.user.dto.UserAthentication;
import com.harryporter.ddokbun.domain.user.dto.UserSimpleDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.nio.file.attribute.UserPrincipal;
import java.security.Principal;

@RequestMapping(name="/cart")
@RestController
@RequiredArgsConstructor
@Api(tags = "[장바구니 CRUD API]")
@Slf4j
public class CartController {

    private final CartService cartService;
    //장바구니 아이템 등록
    //유저가 장바구니에 자신의 아이템을 등록한다.

    @ApiOperation(value = "장바구니 등록")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> enrollCartItem(@RequestBody(required = true)CartEnrollReq reqBody,@ApiIgnore @AuthenticationPrincipal UserSimpleDto principal){

        UserSimpleDto userSimpleDto = ((UserSimpleDto)principal);

        log.info("장바구니 등록 컨트롤러 진입 :: 아이템 SEQ : {} :: 사용자 SEQ : {}",reqBody.getItemSeq(),userSimpleDto.getUserSeq());
         int isSuccess = cartService.enrollCartItem(reqBody.getItemSeq(),userSimpleDto.getUserSeq());

        ResponseFrame<?> response = ResponseFrame.ofOKResponse("장바구니에 정상적으로 등록되었습니다.",isSuccess);
        log.info("장바구니 등록 정산 완료 :: response :{}",response.toString());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    //장바구니 아이템 삭제
    //유저가 장바구니에서 자신의 아이템을 삭제한다.
    @ApiOperation(value = "장바구니에서 아이템 삭제")
    @RequestMapping(value = "/cart/{itemSeq}",method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteCartItem(@PathVariable(required = true) Long itemSeq,@ApiIgnore @AuthenticationPrincipal UserSimpleDto principal){

        log.info("장바구니 아이템 삭제 API 진입 :: itemSeq : {} :: userSeq : {}",itemSeq,principal.getUserSeq());

        int result = cartService.deleteCartItem(itemSeq,principal.getUserSeq());
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("장바구니 아이템이 정상적으로 삭제되었습니다.",result);
        return new ResponseEntity<>(res,HttpStatus.OK);
    }


    //장바구니 아이템의 수량을 수정한다.
    @RequestMapping(value="/cart/{itemSeq}",method = RequestMethod.PUT)
    public ResponseEntity<?> updateCartItemCount(@PathVariable Integer itemSeq){

        return null;
    }

    //장바구니 확인
    //유저가 자신의 장바구니의 아이템을 확인한다.
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getMyCartItems(){

        return null;
    }




}
