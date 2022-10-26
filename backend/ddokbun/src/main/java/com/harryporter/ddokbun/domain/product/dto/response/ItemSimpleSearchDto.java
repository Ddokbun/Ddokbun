package com.harryporter.ddokbun.domain.product.dto.response;

public class ItemSimpleSearchDto {

    public ItemSimpleSearchDto(Long itemSeq,String itemName,String itemImageUrl){

        this.itemSeq = itemSeq;
        this.itemName = itemName;
        this.itemImageUrl = itemImageUrl;
    }

    //상품 아이디
    private Long itemSeq;
    //식물 이름
    private String itemName;
    //이미지경로
    private String itemImageUrl;

}
