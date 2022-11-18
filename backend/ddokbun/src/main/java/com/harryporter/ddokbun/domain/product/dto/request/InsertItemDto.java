package com.harryporter.ddokbun.domain.product.dto.request;


import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.product.entity.Item;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class InsertItemDto {
    //상품명
    private String itemName;
    private String itemEnName;
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

    private long plantSeq;

    public static InsertItemDto of(Item item){
        return InsertItemDto.builder()
                .itemInfo(item.getItemInfo())
                .itemKind(item.getItemKind())
                .itemPrice(item.getItemPrice())
                .itemStock(item.getItemStock())
                .itemName(item.getItemName())
                .itemPicture(item.getItemPicture())
                .build();
    }

    public Item toEntity(Plant plant){
        if(plant == null) {
            return Item.builder()
                    .itemName(itemName)
                    .itemEnName(itemEnName)
                    .itemPrice(itemPrice)
                    .itemInfo(itemInfo)
                    .itemStock(itemStock)
                    .itemPicture(itemPicture)
                    .itemKind(itemKind)
                    .plant(null)
                    .build();
        }else{
            return Item.builder()
                    .itemName(plant.getPlantName())
                    .itemEnName(plant.getPlantNeName())
                    .itemPrice(itemPrice)
                    .itemInfo(plant.getSpecManageInfo())
                    .itemStock(itemStock)
                    .itemPicture(plant.getImagePath())
                    .itemKind(itemKind)
                    .plant(plant)
                    .build();
        }
    }


}