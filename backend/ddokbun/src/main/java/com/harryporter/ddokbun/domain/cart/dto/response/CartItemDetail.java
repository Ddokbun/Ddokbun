package com.harryporter.ddokbun.domain.cart.dto.response;

import com.harryporter.ddokbun.domain.cart.entity.Cart;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static com.harryporter.ddokbun.utils.string.format.DdokbunStringUtils.ifStringNull;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class CartItemDetail {

    //상품 ID
    private  long itemSeq;
    //상품 영문명
    private String itemEnName;

    //상품 이름
    private String itemName;

    //이미지 URL
    private String imageUrl;

    //아이템 유형
    private int itemKind;
    //가격
    private int price;

    //라벨들
    private String itemLabels;

    //카트 수량
    private int quantity;

    public static CartItemDetail of(Cart cart){

                CartItemDetailBuilder builder = CartItemDetail.
                        builder() .quantity(cart.getQuantity());

                if(cart.getItem() != null){
                    builder
                            .itemSeq(cart.getItem().getItemSeq())
                            .itemName(cart.getItem().getItemName())
                            .imageUrl(cart.getItem().getItemPicture())
                            .price(cart.getItem().getItemPrice())
                            .itemKind(cart.getItem().getItemKind());

                    if(cart.getItem().getItemKind() == 2){
                        builder.itemEnName("Pot").itemLabels("");
                    }
                    if( cart.getItem().getItemKind() == 1&&cart.getItem().getPlant() != null){
                        builder.itemEnName(ifStringNull(cart.getItem().getPlant().getPlantZRName(),""))
                                .itemLabels(ifStringNull(cart.getItem().getPlant().getRecRate(),""));
                    }
                }





        return builder.build();
    }


}
