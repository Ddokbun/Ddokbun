package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.product.dto.response.ClickRankDto;
import com.harryporter.ddokbun.domain.product.dto.response.ItemDetailDto;
import com.harryporter.ddokbun.domain.product.dto.response.ItemSearchDto;
import com.harryporter.ddokbun.domain.product.service.ItemService;
import com.harryporter.ddokbun.domain.survey.dto.request.SurveyAnswerRequest;
import com.harryporter.ddokbun.domain.survey.dto.response.SurveyResponse;
import com.harryporter.ddokbun.domain.survey.service.SurveyService;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

@RequestMapping("/market/product")
@RestController
@RequiredArgsConstructor
@Slf4j
public class ProductController {

    private final ItemService itemService;
    private final SurveyService surveyService;
    //식물(상품) 검색
    //사용자가 식물(상품) 이름을 통해 검색한다.
    @ApiOperation("상품 검색")
    @RequestMapping(value = "/search",method = RequestMethod.GET)
    public ResponseEntity<?> productSearch(@RequestParam(value = "title",required = false) String title){

        log.info("상품 검색 API 진입 ::검색어 :{}",title);
        List<ItemSearchDto> content = itemService.searchByTitle(title);
        ResponseFrame<List<ItemSearchDto>> responseFrame =
                ResponseFrame.ofOKResponse(
                        String.format("검색된 상품 리스트를 반환합니다. 발견된 갯수 : %d :: 검색어 : %s",content.size(),title),
                        content);


        log.info("상품 검색 API 완료 ::반환 갯수 {}",responseFrame.getContent().size());
        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    //트래픽 낮추기 용 검색
    @ApiOperation("상품 심플 검색")
    @RequestMapping(value = "/simple-search",method = RequestMethod.GET)
    public ResponseEntity<?> productSimpleSearch(@RequestParam(value = "title",required = false) String title){
        List<?> content = itemService.simpleSearchByTitle(title);


        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse(String.format("검색된 상품 <간략> 리스트를 반환합니다. 발견된 갯수 : %d :: 검색어 : %s",content.size(),title),content);


        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    //상품 상세보기
    //사용자가 상품에 대한 모든 정보를 요청한다.
    @ApiOperation("상품 디테일 검색")
    @RequestMapping(value = "/{itemSeq}",method = RequestMethod.GET)
    public ResponseEntity<?> getProductDetail(@PathVariable Long itemSeq){

        log.info("상품 상세보기 API 진입");
        ItemDetailDto itemDetailDto = itemService.getOneItemById(itemSeq);

        ResponseFrame<?> res = ResponseFrame.ofOKResponse("상품 상세 정보를 반환합니다.",itemDetailDto);
        log.info("상품 상세보기 API 반환 : {}" , res);
        return  new ResponseEntity<>(res,HttpStatus.OK);
    }



    //식물(상품) 사진으로 검색
    //사용자가 식물을 사진으로 검색한다.
    @ApiOperation("상품 사진으로 검색(미완)")
    @RequestMapping(value = "/picture",method = RequestMethod.POST)
    public ResponseEntity<?> productSearch(@RequestPart(value = "picture") MultipartFile picture){


        return null;
    }

    //유사 식물 조회
    //해당 상품과 유사한 상품을 추천한다.
    @ApiOperation("유사 식물 조회 (미완)")
    @RequestMapping(value = "/{itemSeq}/similar",method = RequestMethod.GET)
    public ResponseEntity<?> productSimilar(@PathVariable Integer itemSeq){


        return null;
    }

    //유형별 추천 조회
    //유형별 카테고리를 통하여 필터링을 통해 상품을 반환합니다.
    @ApiOperation("카테고리 상품 조회")
    @RequestMapping(value = "/category/{categoryName}",method = RequestMethod.GET)
    public ResponseEntity<?> getProductByCategory(@PathVariable String categoryName){
        ResponseFrame res = ResponseFrame.ofOKResponse("카테고리별 상품 리스트를 반환합니다.",itemService.getProductByCategory(categoryName));
        return new ResponseEntity<>(res,HttpStatus.OK);
    }

    //오늘의 식물 조회
    //서버에서 추산한 오늘의 식물을 반환합니다.
    @ApiOperation("오늘의 식물 조회")
    @RequestMapping(value = "/rec-today",method = RequestMethod.GET)
    public ResponseEntity<?> getTodayRecomendedProduct(){

        List<ItemSearchDto> itemSearchDtoList =  itemService.getTodayRecommendItem();

        ResponseFrame res = ResponseFrame.ofOKResponse("오늘을 식물을 반환합니다.",itemSearchDtoList);
        return new ResponseEntity<>(res,HttpStatus.OK);
    }

    @ApiOperation("인기 식물 클릭 - 조회시 클릭 수 증가")
    @RequestMapping(value = "/hotc/{itemSeq}",method = RequestMethod.GET)
    public ResponseEntity<?> click(@PathVariable Long itemSeq){
        ResponseFrame res = ResponseFrame.ofOKResponse(itemSeq +"번 상품의 조회 수가 증가되었습니다.",itemService.click(itemSeq));
        return new ResponseEntity<>(res,HttpStatus.OK);
    }

    //인기 식물을 조회한다.
    //조회수가 많은 상품을 출력함
    @ApiOperation("인기 식물 조회 (24시간 후 reset)")
    @RequestMapping(value = "/hot",method = RequestMethod.GET)
    public ResponseEntity<?> getHotProduct(){
        ResponseFrame res = ResponseFrame.ofOKResponse("인기 식물 리스트를 반환합니다.",itemService.SearchRankList());
        return new ResponseEntity<>(res,HttpStatus.OK);
    }


    //설문 내용을 조회한다.
    //사용자 설문 구성을 위하여 설문 데이터들을 전송한다.

    @ApiOperation("설문 내용 조회")
    @RequestMapping(value="/survey",method = RequestMethod.GET)
    public ResponseEntity<?> getSurveyData(){

        log.info("설문 내용 조회 API 접근");
        List<SurveyResponse> surveyResponseList =surveyService.getSurveys();

        log.info("설문 내용 반환 :: 설문 문항 갯수 : {}",surveyResponseList.size());

        ResponseFrame res = ResponseFrame.ofOKResponse("설문 문항과 설문 선택지들을 반환합니다.",surveyResponseList);

        return new ResponseEntity<>(res,HttpStatus.OK);
    }

    //사용자 설문 결과를 전송받는다.
    //사용자 설문 결과를 받아 계산과정을 거친 후 그에 맞는 상품들을 출력한다.
    @ApiOperation("설문 결과 전송 후 결과 조회")
    @RequestMapping(value="/survey",method = RequestMethod.POST)
    public ResponseEntity<?> getSurveyThenProcessionEndData(@RequestBody SurveyAnswerRequest surveyAnswerRequest){

        log.info("설문 결과 반환 API 접근 :: {}",surveyAnswerRequest.getAnswerList());
        return new ResponseEntity<>("qwe",HttpStatus.OK);
    }

    //자신의 화분에 맞는 추천 식물들을 반환한다.
    @ApiOperation("자신에게 맞는 화분 조회")
    @RequestMapping(value="/rec-mydata",method = RequestMethod.GET)
    public ResponseEntity<?> getMyPotRelationRecomendProduct(){

        return null;
    }


    @ApiOperation(value = "상품 전체 조회 (itemSeq만)")
    @GetMapping("/list")
    public ResponseEntity<?> getProductList(){
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("전체 상품 seq를 반환합니다",itemService.getProductList());
        return new ResponseEntity<>(res, HttpStatus.OK);
    }




}
