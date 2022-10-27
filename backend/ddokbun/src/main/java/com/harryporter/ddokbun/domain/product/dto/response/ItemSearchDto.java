package com.harryporter.ddokbun.domain.product.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class ItemSearchDto {

    //상품 아이디
    private Long itemSeq;
    //식물 이름
    private String itemName;

    //식물영명
    private String itemEnName;

    //이미지경로
    private String itemImageUrl;

    //가격
    private int itemPrice;

    //라벨
    private String itemLabels;


}
