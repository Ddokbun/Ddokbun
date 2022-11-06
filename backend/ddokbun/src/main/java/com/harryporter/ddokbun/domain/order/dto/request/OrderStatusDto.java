package com.harryporter.ddokbun.domain.order.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderStatusDto {

    private Long orderSeq;

    private String orderStatus;

}
