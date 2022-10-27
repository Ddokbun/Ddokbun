package com.harryporter.ddokbun.domain.cart.service;

public interface CartService {
    int enrollCartItem(Long itemSeq, Long userSeq);

    int deleteCartItem(Long itemSeq, Long userSeq);
}
