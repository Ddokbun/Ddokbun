package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.order.dto.request.OrderStatusDto;
import com.harryporter.ddokbun.domain.order.service.OrderService;
import com.harryporter.ddokbun.domain.plant.dto.PlantDto;
import com.harryporter.ddokbun.domain.plant.service.PlantService;
import com.harryporter.ddokbun.domain.product.dto.request.InsertItemDto;
import com.harryporter.ddokbun.domain.product.dto.request.UpdateItemDto;
import com.harryporter.ddokbun.domain.product.service.ItemService;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.domain.user.service.UserService;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

@Slf4j
@RequestMapping("/admin")
@RequiredArgsConstructor
@RestController
@Api(tags ={" 관리자 API"})
public class AdminController {

    private final UserService userService;
    private final PlantService plantService;
    private final ItemService itemService;
    private final OrderService orderService;

    @ApiOperation(value = "식물 데이터 조회")
    @GetMapping ("/plant")
    public ResponseEntity<?> getPlant(@ApiIgnore @AuthenticationPrincipal UserDto userDto){
//        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
//            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
//        log.info("관리자 접속 완료");

        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("식물 데이터를 반환합니다.",plantService.getPlant());
        return new ResponseEntity<>(res, HttpStatus.OK);
    }


    @ApiOperation(value = "식물 데이터 등록")
    @PostMapping("/plant")
    public ResponseEntity<?> insertPlant(@RequestBody PlantDto plantDto,@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 :: 식물 데이터 등록 API");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("식물 데이터 등록에 성공했습니다",plantService.insertPlant(plantDto));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "식물 데이터 변경")
    @PutMapping("/plant")
    public ResponseEntity<?> updatePlant(@RequestBody PlantDto plantDto,@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 :: 식물 데이터 변경 API");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("식물 데이터 변경에 성공했습니다.",plantService.updatePlant(plantDto));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "상품 전체 목록 조회")
    @GetMapping ("/product/list")
    public ResponseEntity<?> getProductList(@ApiIgnore @AuthenticationPrincipal UserDto userDto, @ApiIgnore @PageableDefault(size = 10) Pageable pageable){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 :: 상품 전체 목록 조회 API");

        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("상품 전체 목록을 반환합니다.",itemService.getAdminProductList(pageable));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "상품 등록")
    @PostMapping("/product")
    public ResponseEntity<?> insertProduct(@RequestBody InsertItemDto itemDto, @ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 :: 상품 등록 API");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("상품이 등록되었습니다",itemService.insertItem(itemDto));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "상품 변경")
    @PutMapping("/product")
    public ResponseEntity<?> updateProduct(@RequestBody UpdateItemDto itemDto, @ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 :: 상품 변경 API");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("상품 정보 변경에 성공했습니다.",itemService.updateItem(itemDto));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "상품 삭제")
    @DeleteMapping("/product/{itemSeq}")
    public ResponseEntity<?> deleteProduct(@PathVariable long itemSeq, @ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 :: 상품 삭제 API");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("상품 삭제에 성공했습니다.",itemService.deleteItem(itemSeq));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "사용자 주문내역 상태 변경")
    @PutMapping("/order")
    public ResponseEntity<?> updateOrderStatus(@RequestBody OrderStatusDto orderStatusDto,@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 :: 사용자 주문내역 상태 변경 API");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("사용자 주문 상태 변경에 성공했습니다",orderService.updateOrderStatus(orderStatusDto,userDto));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "전체 주문 내역 목록 조회")
    @GetMapping ("/order/list")
    public ResponseEntity<?> getOrderList(@ApiIgnore @AuthenticationPrincipal UserDto userDto, @ApiIgnore @PageableDefault(size = 10) Pageable pageable){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 :: 전체 주문 내역 목록 조회 API");

        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("전체 주문 내역 목록을 반환합니다.",orderService.getTotalOrderList(pageable));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "전체 주문 건수 조회")
    @GetMapping ("/order/count")
    public ResponseEntity<?> getTotalOrderCount(@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 :: 전체 주문 건수 조회 API");

        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("전체 주문 건수를 반환합니다.",orderService.getTotalOrderList(null).size());
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "전체 상품 건수 조회")
    @GetMapping ("/product/count")
    public ResponseEntity<?> getTotalProductCount(@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 :: 전체 상품 건수 조회 API");

        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("전체 상품 건수를 반환합니다.",itemService.getAdminProductList(null).size());
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "전체 유저 수 조회")
    @GetMapping ("/user/count")
    public ResponseEntity<?> getTotalUserCount(@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 :: 전체 상품 건수 조회 API");

        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("전체 유저 수를 반환합니다.",userService.getUserList(null).size());
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "최근 10일 간 일자별 판매 건수 조회")
    @GetMapping ("/order/count-by-date")
    public ResponseEntity<?> getOrderCountByDate(@ApiIgnore @AuthenticationPrincipal UserDto userDto){
//        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
//            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
//        log.info("관리자 :: 일자별 판매 건수 조회 API");

        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("일자별 판매 건수를 반환합니다.",orderService.getOrderCountByDate());
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "유저 목록 조회")
    @GetMapping ("/user/list")
    public ResponseEntity<?> getUserList(@ApiIgnore @AuthenticationPrincipal UserDto userDto, @ApiIgnore @PageableDefault(size = 10) Pageable pageable){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 :: 유저 목록 조회 API");

        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("유저 목록을 반환합니다.",userService.getUserList(pageable));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "사용자 권한 변경")
    @GetMapping("/user/role/{userSeq}")
    public ResponseEntity<?> changeUserRole(@PathVariable long userSeq, @ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN")||userDto.getUserSeq()!=30)
            throw new GeneralException(ErrorCode.BAD_REQUEST,"마스터 계정이 아닙니다");
        log.info("관리자 :: 사용자 권한 변경 API");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("사용자 권한 변경에 성공했습니다",userService.changeUserRole(userSeq));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}