package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.product.dto.ItemSearchDto;
import com.harryporter.ddokbun.domain.product.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RequestMapping("/market/product")
@RestController
@RequiredArgsConstructor
public class ProductController {

    private final ItemService itemService;

    //식물(상품) 검색
    //사용자가 식물(상품) 이름을 통해 검색한다.
    @RequestMapping(value = "/search",method = RequestMethod.GET)
    public ResponseEntity<?> productSearch(@RequestParam(value = "title",required = false) String title){

        List<ItemSearchDto> content = itemService.searchByTitle(title);
        ResponseFrame<List<ItemSearchDto>> responseFrame = new ResponseFrame<>();

        responseFrame.setContent(content);
        responseFrame.setMessage( String.format("검색된 상품 리스트를 반환합니다. 발견된 갯수 : %d :: 검색어 : %s",content.size(),title)) ;
        responseFrame.setState(1);

        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    //트래픽 낮추기 용 검색
    @RequestMapping(value = "/simple-search",method = RequestMethod.GET)
    public ResponseEntity<?> productSimpleSearch(@RequestParam(value = "title",required = false) String title){
        List<?> content = itemService.simpleSearchByTitle(title);
        ResponseFrame<List<?>> responseFrame = new ResponseFrame<>();

        responseFrame.setContent(content);
        responseFrame.setMessage( String.format("검색된 상품 <간략> 리스트를 반환합니다. 발견된 갯수 : %d :: 검색어 : %s",content.size(),title)) ;
        responseFrame.setState(1);

        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }


    //식물(상품) 사진으로 검색
    //사용자가 식물을 사진으로 검색한다.
    @RequestMapping(value = "/picture",method = RequestMethod.POST)
    public ResponseEntity<?> productSearch(@RequestPart(value = "picture") MultipartFile picture){


        return null;
    }

    //유사 식물 조회
    //해당 상품과 유사한 상품을 추천한다.
    @RequestMapping(value = "/{itemSeq}/similar",method = RequestMethod.GET)
    public ResponseEntity<?> productSimilar(@PathVariable Integer itemSeq){


        return null;
    }
    //상품 상세보기
    //사용자가 상품에 대한 모든 정보를 요청한다.
    @RequestMapping(value = "/{itemSeq}",method = RequestMethod.GET)
    public ResponseEntity<?> getProductDetail(@PathVariable Integer itemSeq){
        return null;
    }

    //유형별 추천 조회
    //유형별 카테고리를 통하여 필터링을 통해 상품을 반환합니다.
    @RequestMapping(value = "/category/{categoryName}",method = RequestMethod.GET)
    public ResponseEntity<?> getProductWhereCategory(@PathVariable String categoryName){

        return null;
    }

    //오늘의 식물 조회
    //서버에서 추산한 오늘의 식물을 반환합니다.
    @RequestMapping(value = "/rec-today",method = RequestMethod.GET)
    public ResponseEntity<?> getTodayRecomendedProduct(){

        return null;
    }

    //인기 식물을 조회한다.
    //조회수가 많은 상품을 출력함
    @RequestMapping(value = "/hot",method = RequestMethod.GET)
    public ResponseEntity<?> getHotProduct(){

        return null;
    }


    //설문 내용을 조회한다.
    //사용자 설문 구성을 위하여 설문 데이터들을 전송한다.
    @RequestMapping(value="/survey",method = RequestMethod.GET)
    public ResponseEntity<?> getServeyData(){
        return null;
    }

    //사용자 설문 결과를 전송받는다.
    //사용자 설문 결과를 받아 계산과정을 거친 후 그에 맞는 상품들을 출력한다.
    @RequestMapping(value="/survey",method = RequestMethod.POST)
    public ResponseEntity<?> getSurveyThenProcessionEndData(){
        return null;
    }

    //자신의 화분에 맞는 추천 식물들을 반환한다.
    @RequestMapping(value="/rec-mydata",method = RequestMethod.GET)
    public ResponseEntity<?> getMyPotRelationRecomendProduct(){

        return null;
    }




}
