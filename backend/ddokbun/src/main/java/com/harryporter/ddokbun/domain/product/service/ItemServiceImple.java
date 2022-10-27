package com.harryporter.ddokbun.domain.product.service;

import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.plant.entity.dto.PlantDto;
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


}
