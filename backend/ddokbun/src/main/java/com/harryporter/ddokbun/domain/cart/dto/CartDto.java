package com.harryporter.ddokbun.domain.cart.dto;


import com.harryporter.ddokbun.domain.cart.entity.Cart;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartDto {

    private long userSeq;
    private long itemSeq;
    private int quantity;


    public static CartDtoBuilder builder(){
        return new CartDtoBuilder();
    }

    public static CartDto of(Cart cartItem) {
       return  CartDto.builder()
                .itemSeq(cartItem.getItem().getItemSeq())
                .userSeq(cartItem.getUser().getUserSeq())
                .quantity(cartItem.getQuantity())
                .build();
    }

    public static class CartDtoBuilder{
        private CartDto cartDto;

        private CartDtoBuilder(){
            cartDto = new CartDto();
        }
        public CartDtoBuilder userSeq(long userSeq){
            cartDto.userSeq = userSeq;
            return this;
        }
        public CartDtoBuilder itemSeq(long itemSeq){
            cartDto.itemSeq = itemSeq;
            return this;
        }
        public CartDtoBuilder quantity(int quantity){
            cartDto.quantity = quantity;
            return this;
        }

        public CartDto build(){
            return cartDto;
        }
    }

}
