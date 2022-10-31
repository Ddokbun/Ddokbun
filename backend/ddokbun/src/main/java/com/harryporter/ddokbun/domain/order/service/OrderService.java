package com.harryporter.ddokbun.domain.order.service;

import com.harryporter.ddokbun.domain.order.dto.OrderDto;
import com.harryporter.ddokbun.domain.order.dto.request.OrderReq;
import com.harryporter.ddokbun.domain.order.dto.response.OrderDetailDto;
import com.harryporter.ddokbun.domain.order.dto.response.OrderListItemDto;

import java.util.List;

public interface OrderService {
    List<OrderListItemDto> getOrderListByUserSeq(Long userSeq);

    OrderDto enrollOrder(OrderReq orderReq, Long userSeq);

    OrderDetailDto getOrderDetail(Long orderSeq, Long userSeq);
}
