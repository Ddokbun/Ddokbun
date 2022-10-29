package com.harryporter.ddokbun.domain.product.dto.response;

import com.harryporter.ddokbun.domain.product.entity.Item;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class ItemSearchDto {

    //상품 아이디
    private Long itemSeq;
    //식물 이름
    private String itemName;

    //식물영명
    private String itemEnName;

    //이미지경로
    private String itemImageUrl;

    //가격
    private int itemPrice;

    //라벨
    private String itemLabels;


    public static ItemSearchDto of(Item item) {
        ItemSearchDto temp = new ItemSearchDto();

        temp.itemSeq = item.getItemSeq();
        temp.itemName = item.getItemName();

        //식물영명


        //이미지경로
        temp.itemImageUrl =item.getItemPicture();
        temp.itemPrice = item.getItemPrice();

        if(item.getItemKind() == 1){
            temp.itemLabels = item.getPlant().getRecRate();
            temp.itemEnName =item.getPlant().getPlantZRName();
        }else if(item.getItemKind() == 2){
            temp.itemLabels ="";
            temp.itemEnName ="";
        }
        return temp;
    }
}
