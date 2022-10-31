package com.harryporter.ddokbun.domain.product.service;

import com.harryporter.ddokbun.domain.product.entity.TodayItem;
import com.harryporter.ddokbun.domain.plant.repository.dto.PlantDto;
import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.product.dto.ItemDto;
import com.harryporter.ddokbun.domain.product.dto.response.ItemDetailDto;
import com.harryporter.ddokbun.domain.product.dto.response.ItemSearchDto;
import com.harryporter.ddokbun.domain.product.dto.response.ItemSimpleSearchDto;
import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.domain.product.repository.ItemRepository;
import com.harryporter.ddokbun.domain.product.repository.ItemRepositoryCustom;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class ItemServiceImple implements ItemService{


    private final ItemRepositoryCustom itemRepositoryCustom;
    private final ItemRepository itemRepository;

    @Override
    public List<ItemSearchDto> searchByTitle(String title) {
        log.info("searchByTitle :: title : {}",title);

        List<ItemSearchDto> itemSearchDtoList= itemRepositoryCustom.searchByTitle(title);

        return itemSearchDtoList;
    }

    @Override
    public List<ItemSimpleSearchDto> simpleSearchByTitle(String title) {

        log.info("simpleSearchByTitle :: titile : {}",title);
        List<ItemSearchDto> itemSearchDtoList = this.searchByTitle(title);

        List<ItemSimpleSearchDto> itemSimpleSearchDtoList = itemSearchDtoList.stream().map(dto ->{
            return new ItemSimpleSearchDto(dto.getItemSeq(),dto.getItemName(),dto.getItemImageUrl());
        }).collect(Collectors.toList());

        return itemSimpleSearchDtoList;

    }

    @Override
    public ItemDetailDto getOneItemById(Long ItemSeq) {

        Item item = itemRepository.findById(ItemSeq).orElseThrow(()->{
           return new GeneralException(ErrorCode.NOT_FOUND);
        });


        ItemDetailDto idt = new ItemDetailDto();
        PlantDto plantDto =null;
        ItemDto itemDto = ItemDto.of(item);

        //kind가 1이면 식물
        //kind가 2이면 화분
        if(item.getItemKind().intValue() == 1){
            Plant plant=item.getPlant();
            plantDto = PlantDto.of(plant);
        }else if(item.getItemKind().intValue() == 2){
            plantDto = null;
        }

        idt.copy(itemDto);
        idt.setPlant(plantDto);

        return idt;


    }

    @Override
    public List<ItemSearchDto> getTodayRecommendItem() {


        List<TodayItem> todayItems = itemRepository.findTodayItemFetchItem();

       List<ItemSearchDto> itemSearchDtoList = todayItems.stream().map(
                todayItem ->  ItemSearchDto.of(todayItem.getItem())
        ).collect(Collectors.toList());

        return itemSearchDtoList;
    }


    @Transactional(value = Transactional.TxType.REQUIRED)
    @Override
    //특정 아이템의 수량을 감소시키고 감소시킨 수량을 반환한다.
    public int decreaseQuantity(long itemSeq,int quantity){

        Item item =  itemRepository.findByIdWithWriteLock(itemSeq);
        if(quantity > item.getItemStock().intValue()){
            //수량 부족 에러
            log.info("아이템 재고 감소 수행 중, 아이템 재고 부족 :: itemSeq : {} :: quantity : {}:: stock : {}",
                    itemSeq,quantity,item.getItemStock());
            throw new GeneralException("상품 재고가 부족합니다.");
        }
        //재고에서 주문 수량을 제거한다.
        item.setItemStock(item.getItemStock().intValue() - quantity);

        return 0;
    }

}
