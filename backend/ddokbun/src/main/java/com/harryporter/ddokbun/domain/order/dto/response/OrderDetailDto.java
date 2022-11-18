package com.harryporter.ddokbun.domain.order.dto.response;

import com.harryporter.ddokbun.domain.order.dto.OrderDto;
import com.harryporter.ddokbun.domain.product.dto.response.ItemDetailDto;
import lombok.Getter;

import java.util.List;

@Getter
public class OrderDetailDto  {

    private  OrderDto order;
    private List<ItemDetailDto> items;

    public void setOrderProperty(OrderDto orderDto, List<ItemDetailDto> itemDetail){

        this.order = orderDto;
        this.items = itemDetail;
    }

}
