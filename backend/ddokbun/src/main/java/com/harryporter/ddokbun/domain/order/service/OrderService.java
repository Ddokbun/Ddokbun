package com.harryporter.ddokbun.domain.order.service;

import com.harryporter.ddokbun.domain.order.dto.OrderDto;
import com.harryporter.ddokbun.domain.order.dto.request.OrderReq;
import com.harryporter.ddokbun.domain.order.dto.request.OrderStatusDto;
import com.harryporter.ddokbun.domain.order.dto.response.AdminOrderDto;
import com.harryporter.ddokbun.domain.order.dto.response.OrderDateDto;
import com.harryporter.ddokbun.domain.order.dto.response.OrderDetailDto;
import com.harryporter.ddokbun.domain.order.dto.response.OrderListItemDto;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

public interface OrderService {
    List<OrderDto> getOrderListByUserSeq(Long userSeq, String status);

    OrderDto enrollOrder(OrderReq orderReq, Long userSeq);

    OrderDto getOrderDetail(Long orderSeq, Long userSeq);

    List<AdminOrderDto> getTotalOrderList(Pageable pageable);


    String updateOrderStatus(OrderStatusDto orderStatusDto, UserDto userDto);

    List<OrderDateDto> getOrderCountByDate();
}
