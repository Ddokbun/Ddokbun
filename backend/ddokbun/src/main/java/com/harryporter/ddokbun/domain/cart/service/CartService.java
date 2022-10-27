package com.harryporter.ddokbun.domain.cart.service;

import com.harryporter.ddokbun.domain.cart.dto.CartDto;
import com.harryporter.ddokbun.domain.cart.dto.response.CartItemDetail;

import java.util.List;

public interface CartService {
    int enrollCartItem(Long itemSeq, Long userSeq);

    int deleteCartItem(Long itemSeq, Long userSeq);

    CartDto updateCartItem(CartDto cartDto);

    List<CartItemDetail> findAllCartItemByUserSeq(Long userSeq);
}
