package com.harryporter.ddokbun.domain.order.dto.response;

import com.harryporter.ddokbun.domain.order.entity.Order;
import com.harryporter.ddokbun.domain.order.entity.OrderStatus;
import com.harryporter.ddokbun.domain.product.dto.ItemDto;
import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
public class AdminOrderDto {

    private long orderSeq;
    private String orderUserName;
    private OrderStatus orderStatus;
    private String orderPhone;
    private String orderAddress;
    private String orderName;

    public static AdminOrderDto of(Order order){
        if(order==null||order.getItemSeqList()==null) return null;

        return AdminOrderDto.builder()
                .orderSeq(order.getOrderSeq())
                .orderUserName(order.getOrderUserName())
                .orderStatus(order.getOrderStatus())
                .orderPhone(order.getOrderPhone())
                .orderName(order.getOrderName())
                .orderAddress(order.getOrderAddress())
                .build();

    }

}
