package com.harryporter.ddokbun.domain.product.dto.response;

import com.harryporter.ddokbun.domain.plant.dto.PlantDto;
import com.harryporter.ddokbun.domain.product.dto.ItemDto;
import com.harryporter.ddokbun.domain.product.entity.Item;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Getter
@Setter
public class ItemCategoryDto{

    private long itemSeq;

    private String itemName;

    private String itemEnName;

    private int itemPrice;

    private List<String> tags;

    public static ItemCategoryDto of(Item item) {
        ItemCategoryDto idt = new ItemCategoryDto();
        idt.itemSeq=item.getItemSeq();
        idt.itemName=item.getItemName();
        idt.itemEnName=item.getItemEnName();
        idt.itemPrice=item.getItemPrice();
        idt.tags= Arrays.asList(item.getPlant().getRecRate().split(","));
        return idt;
    }
}
