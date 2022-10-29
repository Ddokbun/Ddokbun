package com.harryporter.ddokbun.domain.order.dto.response;

import com.harryporter.ddokbun.domain.order.entity.Order;
import com.harryporter.ddokbun.domain.order.entity.OrderStatus;
import com.harryporter.ddokbun.domain.plant.entity.Plant;
import lombok.Getter;
import org.aspectj.weaver.ast.Or;

import java.time.LocalDateTime;
import java.util.Optional;

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

    public static OrderListItemDto of(Order order){

        OrderListItemDto temp = new OrderListItemDto();

        temp.orderPrice = order.getOrderPrice();
        temp.orderSeq = order.getOrderSeq();
        temp.orderQuantity = order.getOrderQuantity();
        temp.itemSeq = order.getItem().getItemSeq();
        temp.orderStatus = order.getOrderStatus();
        temp.imageUrl = order.getItem().getItemPicture();
        if(order.getItem().getItemKind() == 1){
            temp.itemEnName = order.getItem().getPlant().getPlantZRName();
        }else if(order.getItem().getItemKind() == 2){
            temp.itemEnName = "Pot";
        }
        return temp;
    }
}
