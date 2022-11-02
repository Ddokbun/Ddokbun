package com.harryporter.ddokbun.domain.product.dto.response;

import com.harryporter.ddokbun.domain.plant.dto.PlantDto;
import com.harryporter.ddokbun.domain.product.dto.ItemDto;
import com.harryporter.ddokbun.domain.product.entity.Item;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ItemDetailDto extends ItemDto{


    private PlantDto plant;

    public static ItemDetailDto of(Item item) {
        ItemDetailDto idt = new ItemDetailDto();
        idt.copy(ItemDto.of(item));
        idt.setPlant(PlantDto.of(item.getPlant()));
        return idt;
    }

}
