package com.harryporter.ddokbun.domain.order.dto.response;

import com.harryporter.ddokbun.domain.order.entity.Order;
import com.harryporter.ddokbun.domain.order.entity.OrderStatus;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Data
@Builder
public class AdminOrderDto {

    private String itemName;
    private String orderUserName;
    private OrderStatus orderStatus;
    private String orderPhone;
    private String orderAddress;

    public static AdminOrderDto of(Order order){
        if(order==null||order.getItem()==null) return null;
        return AdminOrderDto.builder()
                .itemName(order.getItem().getItemName())
                .orderUserName(order.getOrderUserName())
                .orderStatus(order.getOrderStatus())
                .orderPhone(order.getOrderPhone())
                .orderAddress(order.getOrderAddress()).build();
    }

}
