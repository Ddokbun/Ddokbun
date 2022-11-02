package com.harryporter.ddokbun.domain.product.service;

import com.harryporter.ddokbun.domain.plant.repository.PlantRepository;
import com.harryporter.ddokbun.domain.product.dto.request.InsertItemDto;
import com.harryporter.ddokbun.domain.product.dto.request.UpdateItemDto;
import com.harryporter.ddokbun.domain.product.entity.TodayItem;
import com.harryporter.ddokbun.domain.plant.dto.PlantDto;
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
    private final PlantRepository plantRepository;

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
    @Transactional
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

    @Override
    public ItemDetailDto insertItem(InsertItemDto insertItemDto){
        Plant plant=null;
        if(insertItemDto.getItemKind()!=2) {
            plant = plantRepository.findByPlantSeq(insertItemDto.getPlantSeq()).orElseThrow(
                    ()-> new GeneralException(ErrorCode.NOT_FOUND,"식물을 찾을 수 없습니다."));
        }
        Item item = insertItemDto.toEntity(plant);
        try {
            itemRepository.save(item);
        }catch (Exception e){
            throw new GeneralException(ErrorCode.VALIDATION_ERROR,"상품 DB 등록에 실패하였습니다. ");
        }

        log.info("데이터 update 후 : {}",item.getItemSeq());
        ItemDetailDto idt = new ItemDetailDto();
        idt.copy(ItemDto.of(item));
        idt.setPlant(PlantDto.of(item.getPlant()));
        return idt;
    }

    @Override
    public ItemDetailDto updateItem(UpdateItemDto updateItemDto){
        Item oldItem=itemRepository.findById(updateItemDto.getItemSeq()).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"상품을 찾을 수 없습니다."));

        Plant plant=null;
        if(updateItemDto.getItemKind()!=2) {
            plant = plantRepository.findByPlantSeq(updateItemDto.getPlantSeq()).orElseThrow(
                    ()-> new GeneralException(ErrorCode.NOT_FOUND,"식물을 찾을 수 없습니다."));
        }
        Item newItem = updateItemDto.toEntity(plant);

        log.info("데이터 update 전 : {}",oldItem.getItemSeq());
        oldItem.changeItem(newItem);
        try {
            itemRepository.save(oldItem);
        }catch (Exception e){
            throw new GeneralException(ErrorCode.BAD_REQUEST,"상품 변경에 실패했습니다.");
        }
        log.info("데이터 update 후 : {}",oldItem.getItemSeq());
        ItemDetailDto idt = new ItemDetailDto();
        idt.copy(ItemDto.of(oldItem));
        idt.setPlant(PlantDto.of(oldItem.getPlant()));

        return idt;
    }

    @Override
    public String deleteItem(long itemSeq) {
        try {
            itemRepository.deleteById(itemSeq);
        }catch (Exception e){
           throw new GeneralException(ErrorCode.NOT_FOUND,"삭제가 불가능하거나, 존재하지 않는 상품입니다.");
        }
        return "Delete Success";
    }

    @Override
    public List<Long> getProductList(){
        List<Item> products = itemRepository.findAll();
        List<Long> productList = products.stream().map(product -> product.getItemSeq()).collect(Collectors.toList());
        return productList;
    }

    @Override
    public List<ItemDto> getProductByCategory(String category){
        List<Item> items = itemRepository.findAllByPlant_RecRateContainingIgnoreCase(category);
        List<ItemDto> productList = items.stream().map(item ->ItemDto.of(item)).collect(Collectors.toList());
        return productList;
    }

}
