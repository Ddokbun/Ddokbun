package com.harryporter.ddokbun.domain.order.dto;

import com.harryporter.ddokbun.domain.order.entity.Order;
import com.harryporter.ddokbun.domain.order.entity.OrderStatus;
import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.domain.user.entity.User;

import javax.persistence.*;
import java.time.LocalDateTime;

public class OrderDto {
    //주문 일련 번호
    private long orderSeq;
    //멤버
    private long userSeq;
    //상품
    //상품에서 주문내역을 볼 필요는 없으니깐 , 상대편에서 mappedBy는 생략, 관리자가 생기면 추가해야할 듯
    private long itemSeq;
    //상품 수량
    private int orderQuantity;
    //상품 가격
    private int orderPrice;
    //주문자명, 주문자의 이름
    private String orderUserName;
    //주문자 연락처
    private String orderPhone;
    //주문자 이메일
    private String orderEmail;
    //수령인 명
    private String orderReciver;
    //배송지 주소
    private String orderAddress;
    //운송장 번호
    private String orderWaybillNumber;
    //결제수단
    private String orderMethod;
    //결제 시간
    private LocalDateTime orderTime;
    //주문 상태
    private OrderStatus orderStatus;

    public static OrderDto of(Order order) {
        OrderDto temp = new OrderDto();
        temp.orderSeq = order.getOrderSeq();
        temp.userSeq = order.getUser().getUserSeq();
        temp.itemSeq = order.getItem().getItemSeq();
        temp.orderQuantity = order.getOrderQuantity();
        temp.orderPrice = order.getOrderPrice();
        temp.orderUserName = order.getOrderUserName();
        temp.orderPhone = order.getOrderPhone();
        temp. orderEmail = order.getOrderEmail();
        temp. orderReciver = order.getOrderReciver();
        temp.orderAddress = order.getOrderAddress();
        temp.orderWaybillNumber = order.getOrderWaybillNumber();
        temp.orderMethod = order.getOrderMethod();
        temp. orderTime = order.getOrderTime();
        temp.orderStatus = order.getOrderStatus();
        return temp;
    }
}
