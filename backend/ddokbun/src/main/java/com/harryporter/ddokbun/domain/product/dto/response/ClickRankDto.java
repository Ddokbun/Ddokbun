package com.harryporter.ddokbun.domain.product.dto.response;

import com.harryporter.ddokbun.domain.product.entity.Item;
import lombok.Data;
import org.springframework.data.redis.core.ZSetOperations;

@Data
public class ClickRankDto {
    private long rankItemSeq;
    private double clickCount;
    private String rankItemName;
    private String rankItemEnName;
    private int rankItemPrice;
    private String imgPath;
    private long plantSeq;



    public static ClickRankDto convertToClickRankDto(ZSetOperations.TypedTuple<String> stringTypedTuple, Item item) {
        if(item==null) return null;
        ClickRankDto clickRankDto = new ClickRankDto();
        clickRankDto.rankItemSeq = Long.parseLong(stringTypedTuple.getValue());
        clickRankDto.clickCount=stringTypedTuple.getScore();
        clickRankDto.rankItemName=item.getItemName();
        clickRankDto.rankItemEnName=item.getItemEnName();
        clickRankDto.rankItemPrice=item.getItemPrice();
        clickRankDto.imgPath=item.getItemPicture();
        clickRankDto.plantSeq=item.getPlant().getPlantSeq();
        return clickRankDto;

    }

}
