package com.harryporter.ddokbun.domain.product.dto.response;

import com.harryporter.ddokbun.domain.product.entity.Item;
import lombok.Data;
import org.springframework.data.redis.core.ZSetOperations;

@Data
public class ItemSelectedDto {
    private String rankItemName;
    private String rankItemEnName;
    private int rankItemPrice;
    private String imgPath;
    private long plantSeq;

    public static ItemSelectedDto of(Item item) {
        if(item==null) return null;
        ItemSelectedDto clickRankDto = new ItemSelectedDto();
        clickRankDto.rankItemName=item.getItemName();
        clickRankDto.rankItemEnName=item.getItemEnName();
        clickRankDto.rankItemPrice=item.getItemPrice();
        clickRankDto.imgPath=item.getItemPicture();
        clickRankDto.plantSeq=item.getPlant().getPlantSeq();
        return clickRankDto;
    }

}
