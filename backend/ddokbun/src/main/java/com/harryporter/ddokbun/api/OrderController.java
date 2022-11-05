package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.order.dto.OrderDto;
import com.harryporter.ddokbun.domain.order.dto.request.OrderReq;
import com.harryporter.ddokbun.domain.order.dto.request.OrderStatusDto;
import com.harryporter.ddokbun.domain.order.dto.response.OrderDetailDto;
import com.harryporter.ddokbun.domain.order.dto.response.OrderListItemDto;
import com.harryporter.ddokbun.domain.order.entity.OrderStatus;
import com.harryporter.ddokbun.domain.order.service.OrderService;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

@Slf4j
@RequestMapping("/order")
@RestController
@RequiredArgsConstructor
public class OrderController {


    private final OrderService orderService;

    //주문하기
    //유저가 상품을 주문한다.
    @ApiOperation("주문 내역 저장")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> doOrder(@RequestBody OrderReq orderReq, @ApiIgnore @AuthenticationPrincipal UserDto user ){

        OrderDto orderDto = orderService.enrollOrder(orderReq,user.getUserSeq());

        ResponseFrame<?> res = ResponseFrame.ofOKResponse("정상적으로 주문이 완료 되었습니다.",orderDto);
        return  new ResponseEntity<>(res,HttpStatus.OK);
    }

    @ApiOperation(value = "주문 결제 완료")
    @GetMapping("/{orderSeq}/pay")
    public ResponseEntity<?> updatePayComplete(@PathVariable long orderSeq, @ApiIgnore @AuthenticationPrincipal UserDto userDto){
        log.info("주문 결제 완료 API");
        ResponseFrame<?> res =  ResponseFrame.ofOKResponse(
                "주문 결제 완료 상태 변경에 성공했습니다",orderService.updateOrderStatus(new OrderStatusDto(orderSeq, "paycomplete")));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    //주문 취소
    //유저가 주문한 상품을 취소한다.
    @RequestMapping(value = "/{orderSeq}",method = RequestMethod.DELETE)
    public ResponseEntity<?> cancelOrder(){


        return null;
    }

    //주문 내역 리스트
    //사용자 주문내역 리스트 보기
    @ApiOperation("주문 내역 리스트")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getMyOrderList(@ApiIgnore @AuthenticationPrincipal UserDto userDto){

        List<OrderListItemDto> orderListItemDtoList =  orderService.getOrderListByUserSeq(userDto.getUserSeq());

        ResponseFrame<?> res = ResponseFrame.ofOKResponse("주문 내역 리스트를 반환합니다.",orderListItemDtoList);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    //주문 내역 상세보기
    //사용자의 주문내역 상세보기
    @RequestMapping(value = "/{orderSeq}",method = RequestMethod.GET)
    public ResponseEntity<?> getMyOrderDetail(@PathVariable(value = "orderSeq") Long orderSeq, @ApiIgnore @AuthenticationPrincipal UserDto principal){

        OrderDetailDto orderDetailDto =  orderService.getOrderDetail(orderSeq,principal.getUserSeq());

        ResponseFrame<?> res =
        ResponseFrame.ofOKResponse("주문 상세내용을 반환합니다.",orderDetailDto);



        return new ResponseEntity<>(res,HttpStatus.OK);
    }
}
