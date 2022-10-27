package com.harryporter.ddokbun.domain.product.dto;

import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.product.entity.Item;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class ItemDto {

    //상품 일련 번호
    private long itemSeq;
    //상품명
    private String itemName;
    //가격
    private int itemPrice;
    //설명
    private String itemInfo;
    //재고
    private  int itemStock;
    //사진
    private String itemPicture;
    //1이면 식물
    //2이면 화분 등등의 상품들
    private int itemKind;

    public static ItemDto of(Item item){
        return ItemDto.builder()
                .itemInfo(item.getItemInfo())
                .itemKind(item.getItemKind())
                .itemSeq(item.getItemSeq())
                .itemPrice(item.getItemPrice())
                .itemStock(item.getItemStock())
                .itemName(item.getItemName())
                .itemPicture(item.getItemPicture())
                .build();
    }

    public void copy(ItemDto other){
        this.itemSeq = other.itemSeq;
        this.itemName = other.itemName;
        this.itemInfo =other.itemInfo;
        this.itemKind = other.itemKind;
        this.itemPicture = other.itemPicture;
        this.itemPrice = other.itemPrice;
        this.itemStock = other.itemStock;
    }


}
