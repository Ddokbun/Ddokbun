package com.harryporter.ddokbun.domain.product.dto.response;

import com.harryporter.ddokbun.domain.product.entity.Item;
import lombok.Data;
import org.springframework.data.redis.core.ZSetOperations;

@Data
public class ItemSelectedDto {
    private String ItemName;
    private String ItemEnName;
    private int ItemPrice;
    private String imgPath;
    private long plantSeq;
    private long itemSeq;

    public static ItemSelectedDto of(Item item) {
        if(item==null) return null;
        ItemSelectedDto selectedDto = new ItemSelectedDto();
        selectedDto.ItemName=item.getItemName();
        selectedDto.ItemEnName=item.getItemEnName();
        selectedDto.ItemPrice=item.getItemPrice();
        selectedDto.imgPath=item.getItemPicture();
        selectedDto.plantSeq=item.getPlant().getPlantSeq();
        selectedDto.itemSeq=item.getItemSeq();
        return selectedDto;
    }

}
