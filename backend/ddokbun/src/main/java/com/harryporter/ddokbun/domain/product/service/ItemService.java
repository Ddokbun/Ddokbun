package com.harryporter.ddokbun.domain.product.service;
import org.springframework.data.domain.Pageable;
import com.harryporter.ddokbun.domain.product.dto.request.InsertItemDto;
import com.harryporter.ddokbun.domain.product.dto.ItemDto;
import com.harryporter.ddokbun.domain.product.dto.request.UpdateItemDto;
import com.harryporter.ddokbun.domain.product.dto.response.*;


import java.util.List;

public interface ItemService {

    List<ItemSearchDto> searchByTitle(String title);
    List<ItemSimpleSearchDto> simpleSearchByTitle(String title);

    ItemDetailDto getOneItemById(Long ItemSeq);

    List<ItemSearchDto> getTodayRecommendItem();
    int decreaseQuantity(long itemSeq,int quantity);


    ItemDto insertItem(InsertItemDto insertItemDto);

    ItemDetailDto updateItem(UpdateItemDto updateItemDto);


    String deleteItem(long itemSeq);

    List<Long> getProductList(Pageable pageable);


    List<ItemDetailDto> getAdminProductList(Pageable pageable);

    List<ItemListDto> getSimilarProduct(long itemSeq, Pageable pageable);

    List<ItemListDto> getProductByCategory(String category, Pageable pageable);

    String click(long itemSeq);

    List<ClickRankDto> SearchRankList();
}
