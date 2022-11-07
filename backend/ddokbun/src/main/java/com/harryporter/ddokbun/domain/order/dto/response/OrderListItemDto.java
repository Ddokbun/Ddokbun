package com.harryporter.ddokbun.domain.order.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.harryporter.ddokbun.domain.order.entity.Order;
import com.harryporter.ddokbun.domain.order.entity.OrderStatus;
import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
public class OrderListItemDto {

    //주문 일련 번호
    private long orderSeq;
    //상품 수량
    private int orderQuantity;

    private String orderName;
    //상품 가격
    private int orderPrice;
    //주문 상태
    private OrderStatus orderStatus;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date orderTime;

    public static OrderListItemDto of(Order order){
        OrderListItemDto temp = new OrderListItemDto();
        temp.orderPrice = order.getOrderPrice();
        temp.orderSeq = order.getOrderSeq();
        temp.orderName=order.getOrderName();
        temp.orderQuantity = order.getOrderQuantity();
        temp.orderStatus = order.getOrderStatus();
        temp.orderTime = order.getOrderTime();
        return temp;
    }
}
