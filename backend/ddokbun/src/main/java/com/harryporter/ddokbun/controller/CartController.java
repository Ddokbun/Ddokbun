package com.harryporter.ddokbun.controller;

import org.springframework.http.HttpMethod;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping(name="/cart")
@RestController
public class CartController {

    //장바구니 아이템 등록
    //유저가 장바구니에 자신의 아이템을 등록한다.

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> enrollCartItem(){
//미구현

        return null;
    }

    //장바구니 아이템 삭제
    //유저가 장바구니에서 자신의 아이템을 삭제한다.
    @RequestMapping(value = "/cart/{itemSeq}",method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteCartItem(@PathVariable Integer itemSeq){
//미구현
        return null;
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
