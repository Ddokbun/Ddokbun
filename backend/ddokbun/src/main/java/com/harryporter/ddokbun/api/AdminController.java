package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.order.dto.request.OrderStatusDto;
import com.harryporter.ddokbun.domain.order.service.OrderService;
import com.harryporter.ddokbun.domain.plant.dto.PlantDto;
<<<<<<< Updated upstream
import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.plant.repository.PlantRepository;
=======
>>>>>>> Stashed changes
import com.harryporter.ddokbun.domain.plant.service.PlantService;
import com.harryporter.ddokbun.domain.product.dto.request.InsertItemDto;
import com.harryporter.ddokbun.domain.product.dto.request.UpdateItemDto;
import com.harryporter.ddokbun.domain.product.service.ItemService;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

@Slf4j
@RequestMapping("/admin")
@RequiredArgsConstructor
@RestController
@Api(tags ={" 관리자 API"})
public class AdminController {

    private final PlantRepository plantRepository;
    private final PlantService plantService;
    private final ItemService itemService;
    private final OrderService orderService;

    @ApiOperation(value = "식물 데이터 조회 (Test용 1번 데이터 조회)")
    @GetMapping ("/plant")
    public ResponseEntity<?> getPlant(@ApiIgnore @AuthenticationPrincipal UserDto userDto){
//        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
//            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
//        log.info("관리자 접속 완료");

        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success",plantService.getPlant());
        return new ResponseEntity<>(res, HttpStatus.OK);
    }


    @ApiOperation(value = "식물 데이터 등록")
    @PostMapping("/plant")
    public ResponseEntity<?> insertPlant(@RequestBody PlantDto plantDto,@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 접속 완료");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success",plantService.insertPlant(plantDto));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "식물 데이터 변경")
    @PutMapping("/plant")
    public ResponseEntity<?> updatePlant(@RequestBody PlantDto plantDto,@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        log.info("관리자 접속 완료");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success",plantService.updatePlant(plantDto));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "상품 등록")
    @PostMapping("/product")
    public ResponseEntity<?> insertProduct(@RequestBody InsertItemDto itemDto, @ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success",itemService.insertItem(itemDto));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "상품 변경")
    @PutMapping("/product")
    public ResponseEntity<?> updateProduct(@RequestBody UpdateItemDto itemDto, @ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success",itemService.updateItem(itemDto));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "상품 삭제")
    @DeleteMapping("/product/{itemSeq}")
    public ResponseEntity<?> deleteProduct(@PathVariable long itemSeq, @ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success",itemService.deleteItem(itemSeq));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "사용자 주문내역 상태 변경")
    @PutMapping("/order")
    public ResponseEntity<?> updateOrderStatus(@RequestBody OrderStatusDto orderStatusDto,@ApiIgnore @AuthenticationPrincipal UserDto userDto){
        if(!userDto.getUserRole().equals("ROLE_ADMIN"))
            throw new GeneralException(ErrorCode.BAD_REQUEST,"관리자 계정이 아닙니다");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse("Success",orderService.updateOrderStatus(orderStatusDto));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}