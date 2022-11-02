package com.harryporter.ddokbun.domain.order.dto.response;

import com.harryporter.ddokbun.domain.order.dto.OrderDto;
import com.harryporter.ddokbun.domain.product.dto.response.ItemDetailDto;
import lombok.Getter;

@Getter
public class OrderDetailDto  {

    private  OrderDto order;
    private ItemDetailDto item;

    public void setOrderProperty(OrderDto orderDto, ItemDetailDto itemDetail){

        this.order = orderDto;
        this.item = itemDetail;
    }

}
