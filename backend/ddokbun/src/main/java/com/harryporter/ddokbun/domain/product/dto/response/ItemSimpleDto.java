package com.harryporter.ddokbun.domain.product.dto.response;


import com.harryporter.ddokbun.domain.product.entity.Item;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class ItemSimpleDto {

    //상품 일련 번호
    private long itemSeq;
    //상품명
    private String itemName;

    private String itemEnName;
    //가격
    private int itemPrice;

    //사진
    private String itemPicture;
    //1이면 식물
    //2이면 화분 등등의 상품들


    public static ItemSimpleDto of(Item item){
        return ItemSimpleDto.builder()
                .itemSeq(item.getItemSeq())
                .itemPrice(item.getItemPrice())
                .itemName(item.getItemName())
                .itemEnName(item.getItemEnName())
                .itemPicture(item.getItemPicture())
                .build();
    }


    public void copy(ItemSimpleDto other){
        this.itemSeq = other.itemSeq;
        this.itemName = other.itemName;
        this.itemPicture = other.itemPicture;
        this.itemPrice = other.itemPrice;
        this.itemEnName= other.itemEnName;
    }


}
