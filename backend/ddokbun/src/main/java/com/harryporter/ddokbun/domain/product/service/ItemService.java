package com.harryporter.ddokbun.domain.product.service;

import com.harryporter.ddokbun.domain.product.dto.ItemSearchDto;
import com.harryporter.ddokbun.domain.product.dto.response.ItemSimpleSearchDto;

import java.util.List;

public interface ItemService {

    List<ItemSearchDto> searchByTitle(String title);
    List<ItemSimpleSearchDto> simpleSearchByTitle(String title);

}
