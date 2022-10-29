package com.harryporter.ddokbun.domain.order.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.harryporter.ddokbun.domain.order.entity.Order;
import com.harryporter.ddokbun.domain.order.entity.OrderStatus;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class OrderListItemDto {

    //주문 일련 번호
    private long orderSeq;
    //상품 수량
    private int orderQuantity;
    //상품 가격
    private int orderPrice;
    //상품
    private long itemSeq;
    //주문 상태
    private OrderStatus orderStatus;
    //이미지
    private String imageUrl;

    private String itemEnName;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime orderTime;

    public static OrderListItemDto of(Order order){

        OrderListItemDto temp = new OrderListItemDto();

        temp.orderPrice = order.getOrderPrice();
        temp.orderSeq = order.getOrderSeq();
        temp.orderQuantity = order.getOrderQuantity();
        temp.itemSeq = order.getItem().getItemSeq();
        temp.orderStatus = order.getOrderStatus();
        temp.imageUrl = order.getItem().getItemPicture();
        temp.orderTime = order.getOrderTime();
        if(order.getItem().getItemKind() == 1){
            temp.itemEnName = order.getItem().getPlant().getPlantZRName();
        }else if(order.getItem().getItemKind() == 2){
            temp.itemEnName = "Pot";
        }
        return temp;
    }
}
