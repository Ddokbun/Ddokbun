package com.harryporter.ddokbun.domain.product.dto.response;

import com.harryporter.ddokbun.domain.product.entity.Item;
import lombok.Getter;
import lombok.Setter;

import java.util.Arrays;
import java.util.List;


@Getter
@Setter
public class ItemListDto {

    private long itemSeq;

    private String itemName;

    private String itemEnName;

    private int itemPrice;

    private String itemImage;
    private List<String> tags;

    public static ItemListDto of(Item item) {
        ItemListDto idt = new ItemListDto();
        idt.itemSeq=item.getItemSeq();
        idt.itemName=item.getItemName();
        idt.itemEnName=item.getItemEnName();
        idt.itemPrice=item.getItemPrice();
        idt.itemImage=item.getItemPicture();
        idt.tags= Arrays.asList(item.getPlant().getRecRate().split(","));
        return idt;
    }
}
