package com.harryporter.ddokbun.domain.product.dto.response;

import com.harryporter.ddokbun.domain.plant.dto.PlantDto;
import com.harryporter.ddokbun.domain.product.dto.ItemDto;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ItemDetailDto extends ItemDto{


    private PlantDto plant;


}
