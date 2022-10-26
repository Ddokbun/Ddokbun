package com.harryporter.ddokbun.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RequestMapping("/product")
@RestController
public class ProductController {

    //식물(상품) 검색
    //사용자가 식물(상품) 이름을 통해 검색한다.
    @RequestMapping(value = "/search",method = RequestMethod.GET)
    public ResponseEntity<?> productSearch(@RequestParam(value = "title") String productName){

        return null;
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
