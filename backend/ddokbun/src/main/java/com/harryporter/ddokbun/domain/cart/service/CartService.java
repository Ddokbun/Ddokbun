package com.harryporter.ddokbun.domain.cart.service;

import com.harryporter.ddokbun.domain.cart.dto.CartDto;

public interface CartService {
    int enrollCartItem(Long itemSeq, Long userSeq);

    int deleteCartItem(Long itemSeq, Long userSeq);

    CartDto updateCartItem(CartDto cartDto);
}
