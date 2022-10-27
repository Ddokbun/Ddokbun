package com.harryporter.ddokbun.domain.cart.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

//사용자가 장바구니 등록시 itemSeq가 필요
@Getter
@Setter
public class CartEnrollReq {
    @NotNull
    private Long itemSeq;
}
