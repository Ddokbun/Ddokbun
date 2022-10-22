package com.harryporter.ddokbun.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/order")
@RestController
public class OrderController {

    //주문하기
    //유저가 상품을 주문한다.
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> doOrder(){

        return  null;
    }

    //주문 취소
    //유저가 주문한 상품을 취소한다.
    @RequestMapping(value = "/{orderSeq}",method = RequestMethod.DELETE)
    public ResponseEntity<?> cancelOrder(){


        return null;
    }

    //주문 내역 리스트
    //사용자 주문내역 리스트 보기
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getMyOrderList(){

        return null;
    }

    //주문 내역 상세보기
    //사용자의 주문내역 상세보기
    @RequestMapping(value = "/{orederSeq}",method = RequestMethod.GET)
    public ResponseEntity<?> getMyOrderDetail(@PathVariable Integer orderSeq){

        return null;
    }
}
