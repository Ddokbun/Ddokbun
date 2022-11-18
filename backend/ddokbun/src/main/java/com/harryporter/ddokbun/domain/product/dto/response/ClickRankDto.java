package com.harryporter.ddokbun.domain.product.dto.response;

import com.harryporter.ddokbun.domain.product.entity.Item;
import lombok.Data;
import org.springframework.data.redis.core.ZSetOperations;

@Data
public class ClickRankDto {
    private long ItemSeq;
    private double clickCount;
    private String ItemName;
    private String ItemEnName;
    private int ItemPrice;
    private String imgPath;
    private long plantSeq;



    public static ClickRankDto convertToClickRankDto(Item item) {
        if(item==null) return null;
        ClickRankDto clickRankDto = new ClickRankDto();
        clickRankDto.ItemSeq = item.getItemSeq();
        clickRankDto.clickCount=item.getViewCount();
        clickRankDto.ItemName=item.getItemName();
        clickRankDto.ItemEnName=item.getItemEnName();
        clickRankDto.ItemPrice=item.getItemPrice();
        clickRankDto.imgPath=item.getItemPicture();
        clickRankDto.plantSeq=item.getPlant().getPlantSeq();
        return clickRankDto;

    }

}
