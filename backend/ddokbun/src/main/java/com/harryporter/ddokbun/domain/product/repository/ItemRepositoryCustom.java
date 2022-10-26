package com.harryporter.ddokbun.domain.product.repository;

import com.harryporter.ddokbun.domain.plant.entity.QPlant;
import com.harryporter.ddokbun.domain.product.dto.ItemSearchDto;
import com.harryporter.ddokbun.domain.product.entity.QItem;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.util.Strings;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ItemRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    public List<ItemSearchDto> searchByTitle(String title){
        QItem item = new QItem("item");
        QPlant plant = item.plant;

        BooleanBuilder booleanBuilder = new BooleanBuilder();

        //title이 null이 아니면서 공백이 아닐경우
        //상품 이름에 포함되거나, 상품 영문 이름 이거나, 상품 영어 이름이거나 , 상품 학명,유통명
        if(Strings.isNotEmpty(title)) {
            booleanBuilder.or(item.itemName.contains(title));
            booleanBuilder.or(plant.plantZRName.contains(title));
            booleanBuilder.or(plant.plantName.contains(title));
            booleanBuilder.or(plant.plantNeName.contains(title));
            booleanBuilder.or(plant.distbName.contains(title));
        }

        List<ItemSearchDto> itemSearchDtoList =  jpaQueryFactory.from(item)
                .select(Projections.bean(
                        ItemSearchDto.class,
                        item.itemSeq.as("itemSeq"),
                        item.itemName.as("itemName"),
                        item.itemPicture.as("itemImageUrl"),
                        plant.plantZRName.as("itemEnName"),
                        plant.recRate.as("recRate"),
                        item.itemPrice.as("itemPrice")
                )).leftJoin(plant).where(booleanBuilder).fetch();

        return itemSearchDtoList;

    }
}
