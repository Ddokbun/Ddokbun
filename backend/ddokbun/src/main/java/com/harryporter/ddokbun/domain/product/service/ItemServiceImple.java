package com.harryporter.ddokbun.domain.product.service;
import org.springframework.data.domain.Pageable;
import com.harryporter.ddokbun.domain.plant.dto.PlantDto;
import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.plant.repository.PlantRepository;
import com.harryporter.ddokbun.domain.product.dto.ItemDto;
import com.harryporter.ddokbun.domain.product.dto.request.InsertItemDto;
import com.harryporter.ddokbun.domain.product.dto.request.UpdateItemDto;
import com.harryporter.ddokbun.domain.product.dto.response.*;
import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.domain.product.entity.TodayItem;
import com.harryporter.ddokbun.domain.product.repository.ItemRepository;
import com.harryporter.ddokbun.domain.product.repository.ItemRepositoryCustom;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class ItemServiceImple implements ItemService{

    private final ItemRepositoryCustom itemRepositoryCustom;
    private final ItemRepository itemRepository;
    private final PlantRepository plantRepository;

    private final RedisTemplate<String, String> redisTemplate;

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
    public ItemDetailDto getItemByPlantSeq(Long plantSeq) {
        Plant p = plantRepository.findByPlantSeq(plantSeq).orElseThrow(()->{
            throw new GeneralException(ErrorCode.NOT_FOUND);
        });

        Item item = itemRepository.findByPlant(p).orElseThrow(()->{
            throw new GeneralException(ErrorCode.NOT_FOUND);
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
        log.info("상품 등록 Service :: itemName : {}", insertItemDto.getItemName());
        Plant plant=null;
        if(insertItemDto.getItemKind()!=2) {
            log.info("itemKind {} :: 식물, 식물+화분",insertItemDto.getItemKind());
            plant = plantRepository.findByPlantSeq(insertItemDto.getPlantSeq()).orElseThrow(
                    ()-> new GeneralException(ErrorCode.NOT_FOUND,"식물을 찾을 수 없습니다."));
        }
        Item item = insertItemDto.toEntity(plant);
        try {
            itemRepository.save(item);
        }catch (Exception e){
            throw new GeneralException(ErrorCode.VALIDATION_ERROR,"상품 DB 등록에 실패하였습니다. ");
        }
        log.info("상품 등록 Success :: itemName : {}", item.getItemName());

        ItemDetailDto idt = new ItemDetailDto();
        idt.copy(ItemDto.of(item));
        idt.setPlant(PlantDto.of(item.getPlant()));
        return idt;
    }

    @Override
    public ItemDetailDto updateItem(UpdateItemDto updateItemDto){
        log.info("상품 변경 Service :: itemName : {}", updateItemDto.getItemName());
        Item oldItem=itemRepository.findById(updateItemDto.getItemSeq()).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"상품을 찾을 수 없습니다."));

        Plant plant=null;
        if(updateItemDto.getItemKind()!=2) {
            plant = plantRepository.findByPlantSeq(updateItemDto.getPlantSeq()).orElseThrow(
                    ()-> new GeneralException(ErrorCode.NOT_FOUND,"식물을 찾을 수 없습니다."));
        }
        Item newItem = updateItemDto.toEntity(plant);
        log.info("데이터 update 전 :: {}",oldItem.getItemSeq());
        oldItem.changeItem(newItem);
        try {
            itemRepository.save(oldItem);
        }catch (Exception e){
            throw new GeneralException(ErrorCode.BAD_REQUEST,"상품 변경에 실패했습니다.");
        }
        log.info("상품 변경 Success :: itemName : {}", oldItem.getItemName());

        ItemDetailDto idt = new ItemDetailDto();
        idt.copy(ItemDto.of(oldItem));
        idt.setPlant(PlantDto.of(oldItem.getPlant()));
        return idt;
    }

    @Override
    public String deleteItem(long itemSeq) {
        log.info("상품 삭제 Service :: itemSeq : {}", itemSeq);
        try {
            itemRepository.deleteById(itemSeq);
        }catch (Exception e){
           throw new GeneralException(ErrorCode.NOT_FOUND,"삭제가 불가능하거나, 존재하지 않는 상품입니다.");
        }
        log.info("상품 삭제 Success :: itemSeq : {}", itemSeq);
        return "Delete Success";
    }

    @Override
    public List<Long> getProductList(Pageable pageable){
        log.info("상품 전체 목록 조회 Service :: ");
        List<Item> products = itemRepository.findAllBy(pageable);

        log.info("상품 전체 목록 조회 Success :: ");
        return products.stream().map(product -> product.getItemSeq()).collect(Collectors.toList());
    }
    @Override
    public List<ItemDetailDto> getAdminProductList(Pageable pageable){
        log.info("상품 전체 목록 조회 Service :: ");
        List<Item> products = itemRepository.findAllBy(pageable);

        log.info("상품 전체 목록 조회 Success :: ");
        return products.stream().map(product -> ItemDetailDto.of(product)).collect(Collectors.toList());
    }

    @Override
    public List<ItemListDto> getSimilarProduct(long itemSeq, Pageable pageable){
        log.info("유사 상품 조회 Service :: itemSeq : {}", itemSeq);
        List<Item> items = itemRepository.findItemNameByItemSeq(itemSeq,pageable);
        Collections.shuffle(items);

        log.info("유사 상품 조회 Success :: 유사 상품 목록 Size : {}", items.size());
        return items.stream()
                .filter(item -> item.getItemSeq() != itemSeq)
                .map(item -> ItemListDto.of(item)).collect(Collectors.toList());
    }

    @Override
    public List<ItemListDto> getProductByCategory(String category, Pageable pageable){
        log.info("카테고리 조회 Service :: Category : {}", category);
        List<Item> items = itemRepository.findByPlant_RecRateContainingIgnoreCase(category,pageable);
        Collections.shuffle(items);
        log.info("카테고리 조회 Success :: 상품 목록 Size : {}", items.size());
        return items.stream().map(item -> ItemListDto.of(item)).collect(Collectors.toList());
     }


    @Override
    public String click(long itemSeq){
        log.info("조회수 증가 Service :: itemSeq : {}", itemSeq);
        String key = "rank";
        ZSetOperations<String, String> ZSetOperations = redisTemplate.opsForZSet();
        ZSetOperations.incrementScore(key, itemSeq+"", 1);
        log.info("조회수 증가 Success :: {} score +1", itemSeq);
        return "Success";
    }

    @Override
    public List<ClickRankDto> SearchRankList() {
        log.info("인기 식물 조회 Service :: 1 - 10등까지");
        String key = "rank";
        ZSetOperations<String, String> ZSetOperations = redisTemplate.opsForZSet();
        Set<ZSetOperations.TypedTuple<String>> typedTuples = ZSetOperations.reverseRangeWithScores(key, 0, 9);
        List<ClickRankDto> list = typedTuples.stream()
                .map(tuple->ClickRankDto.convertToClickRankDto(tuple, itemRepository.findById(Long.parseLong(tuple.getValue())).orElse(null)))
                .collect(Collectors.toList());
        log.info("인기 식물 조회 Success :: 인기 식물 목록 Size : {}",list.size());
        return list;
    }

    @Override
    public List<ItemSelectedDto> getSelectedProduct() {
        log.info("선별된 식물 조회");
        long number[]={3, 6, 7, 11, 18, 20, 21,  27, 34, 75, 103, 109};
        List<Item> items=new ArrayList<>();
        for(int i=0; i<number.length;i++){
            items.add(itemRepository.findById(387+number[i]).orElse(null));
        }
        return items.stream().map(item -> ItemSelectedDto.of(item)).collect(Collectors.toList());
    }

}
