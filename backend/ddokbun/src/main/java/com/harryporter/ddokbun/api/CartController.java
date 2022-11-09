package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.cart.dto.CartDto;
import com.harryporter.ddokbun.domain.cart.dto.request.CartEnrollReq;
import com.harryporter.ddokbun.domain.cart.dto.request.CartItemUpdateReq;
import com.harryporter.ddokbun.domain.cart.dto.response.CartItemDetail;
import com.harryporter.ddokbun.domain.cart.service.CartService;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

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
    @RequestMapping(value = "/cart",method = RequestMethod.POST)
    public ResponseEntity<?> enrollCartItem(@RequestBody(required = true)CartEnrollReq reqBody,@ApiIgnore @AuthenticationPrincipal UserDto principal){

        UserDto userDto = ((UserDto)principal);

        log.info("장바구니 등록 컨트롤러 진입 :: 아이템 SEQ : {} :: 사용자 SEQ : {}",reqBody.getItemSeq(),userDto.getUserSeq());
        CartItemDetail isSuccess = cartService.enrollCartItem(reqBody.getItemSeq(),userDto.getUserSeq());

        ResponseFrame<?> response = ResponseFrame.ofOKResponse("장바구니에 정상적으로 등록되었습니다.",isSuccess);
        log.info("장바구니 등록 정산 완료 :: response :{}",response.toString());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    //장바구니 아이템 삭제
    //유저가 장바구니에서 자신의 아이템을 삭제한다.
    @ApiOperation(value = "장바구니에서 아이템 삭제")
    @RequestMapping(value = "/cart/{itemSeq}",method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteCartItem(@PathVariable(required = true) Long itemSeq,@ApiIgnore @AuthenticationPrincipal UserDto principal){

        log.info("장바구니 아이템 삭제 API 진입 :: itemSeq : {} :: userSeq : {}",itemSeq,principal.getUserSeq());

        int result = cartService.deleteCartItem(itemSeq,principal.getUserSeq());
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("장바구니 아이템이 정상적으로 삭제되었습니다.",result);
        return new ResponseEntity<>(res,HttpStatus.OK);
    }


    //장바구니 아이템의 수량을 수정한다.
    @ApiOperation(value = "장바구니에서 수량 조절")
    @RequestMapping(value="/cart/{itemSeq}",method = RequestMethod.PUT)
    public ResponseEntity<?> updateCartItemCount(@PathVariable Integer itemSeq, @RequestBody CartItemUpdateReq cartItemUpdateReq, @ApiIgnore @AuthenticationPrincipal UserDto principal){


        log.info("장바구니 수량조절 AP 진입 :: userSeq : {}:: itemSeq : {} :: quantity : {}",principal.getUserSeq(),itemSeq,cartItemUpdateReq.getQuantity());
        CartDto cartDto = CartDto.builder()
                .itemSeq(itemSeq)
                .userSeq(principal.getUserSeq())
                .quantity(cartItemUpdateReq.getQuantity())
                .build();

        CartDto cartDtoRes = cartService.updateCartItem(cartDto);

        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("정상적으로 장바구니 아이템 수량이 변경되었습니다.",cartDtoRes);

        return new ResponseEntity(res,HttpStatus.OK);
    }

    //장바구니 확인
    //유저가 자신의 장바구니의 아이템을 확인한다.
    @RequestMapping(value = "/cart",method = RequestMethod.GET)
    public ResponseEntity<?> getMyCartItems(@ApiIgnore @AuthenticationPrincipal UserDto userDto){

        log.info("장바구니에 등록한 아이템 조회 API :: userSeq : {}",userDto.getUserSeq());

        List<CartItemDetail> cartItemList = cartService.findAllCartItemByUserSeq(userDto.getUserSeq());

        ResponseFrame<?> res = ResponseFrame.ofOKResponse("장바구니 내역을 정상적으로 반환합니다.",cartItemList);
        return new ResponseEntity<>(res,HttpStatus.OK);
    }


    //장바구니에 해당 아이템이 있는지 확인
    //유저가 해당 아이템이 장바구니에 있는지 확인한다.
    @RequestMapping(value = "/cart/{itemSeq}",method = RequestMethod.GET)
    public ResponseEntity<?> checkCartItemByItemSeq(@PathVariable("itemSeq") Long itemSeq,@ApiIgnore @AuthenticationPrincipal UserDto userDto){

        log.info("장바구니에 아이템 존재 여부 확인 API userSeq : {} :: itemSeq : {}",userDto.getUserSeq(),itemSeq);

        int result = cartService.isExists(itemSeq,userDto.getUserSeq());

        ResponseFrame<?> res = ResponseFrame.ofOKResponse("장바구니 내 아이템 존재 여부를 반환합니다. 0 : 없음, 1: 있음",result);
        res.setState(result);

        return new ResponseEntity<>(res,HttpStatus.OK);
    }


}
