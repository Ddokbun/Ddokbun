package com.harryporter.ddokbun.domain.order.service;

import com.harryporter.ddokbun.domain.order.dto.OrderDto;
import com.harryporter.ddokbun.domain.order.dto.request.OrderReq;
import com.harryporter.ddokbun.domain.order.dto.request.OrderStatusDto;
import com.harryporter.ddokbun.domain.order.dto.response.AdminOrderDto;
import com.harryporter.ddokbun.domain.order.dto.response.OrderDateDto;
import com.harryporter.ddokbun.domain.order.dto.response.OrderDetailDto;
import com.harryporter.ddokbun.domain.order.dto.response.OrderListItemDto;
import com.harryporter.ddokbun.domain.order.entity.Order;
import com.harryporter.ddokbun.domain.order.entity.OrderStatus;
import com.harryporter.ddokbun.domain.order.repository.OrderRepository;
import com.harryporter.ddokbun.domain.plant.dto.PlantDto;
import com.harryporter.ddokbun.domain.product.dto.ItemDto;
import com.harryporter.ddokbun.domain.product.dto.response.ItemDetailDto;
import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.domain.product.repository.ItemRepository;
import com.harryporter.ddokbun.domain.product.service.ItemService;
import com.harryporter.ddokbun.domain.user.entity.User;
import com.harryporter.ddokbun.domain.user.repository.UserRepository;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{

    private final OrderRepository orderRepository;
    private final ItemRepository itemRepository;
    private final UserRepository userRepository;
    private final ItemService itemService;

    @Override
    public List<OrderListItemDto> getOrderListByUserSeq(Long userSeq) {

        User user =  userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND)
        );

        List<Order> orders = orderRepository.findByUser(user);

        List<OrderListItemDto> orderListItemDtoList
                = orders.stream().map(order->(OrderListItemDto.of(order))).collect(Collectors.toList());
        return orderListItemDtoList;

    }

    @Override
    @Transactional
    public OrderDto enrollOrder(OrderReq orderReq, Long userSeq) {
        User user = userRepository.findById(userSeq).orElseThrow(
                ()->new GeneralException(ErrorCode.NOT_FOUND));
        Order order = orderReq.toEntity(user);
        log.info("저장합니다!!");
        orderRepository.save(order);
        log.info("변환합니다!!");
        return OrderDto.of(order);
    }

    @Override
    public OrderDto getOrderDetail(Long orderSeq, Long userSeq) {

        Order order =  orderRepository.findById(orderSeq).orElseThrow(
                ()->new GeneralException(ErrorCode.NOT_FOUND,"해당하는 주문 내역을 찾을 수 없습니다,")
        );

        if(order.getUser().getUserSeq().compareTo(userSeq) != 0){
            throw  new GeneralException(ErrorCode.DATA_ACCESS_ERROR,"ACCESS DENIED");
        };

        String items=order.getItemSeqList();
        List<String> itemSeqList = Arrays.asList(items.split(","));

        List<ItemDto> itemList = itemSeqList.stream().map(
                item -> ItemDto.of(itemRepository.findById(Long.parseLong(item)).orElse(null))).collect(Collectors.toList());


        //주문으로 부터 아이템을 가져온다.
    //    Item item = order.getItem();
        //Entity 속성을 맵핑되는 DTO에 삽입
        OrderDto orderDto = OrderDto.of(order);
        orderDto.setItemlist(itemList);

        return orderDto;
    }

    @Override
    public List<AdminOrderDto> getTotalOrderList(){
        List<Order> orders=orderRepository.findAll();

        List<AdminOrderDto> list = orders.stream()
                .filter(order -> order.getItemSeqList() != null)
                .map(order -> AdminOrderDto.of(order)).collect(Collectors.toList());

        return list;
    }

    @Override
    public String updateOrderStatus(OrderStatusDto orderStatusDto){
        log.info("주문 상태 변경 Service :: 변경할 OrderStatus : {}", orderStatusDto.getOrderStatus());
        Order order = orderRepository.findByOrderSeq(orderStatusDto.getOrderSeq()).orElseThrow(
                ()->new GeneralException(ErrorCode.NOT_FOUND,"해당하는 주문 내역을 찾을 수 없습니다,"));

        log.info("현재 주문 상태 : {}, 변경할 주문 상태 : {}",order.getOrderStatus(),orderStatusDto.getOrderStatus());
        switch (orderStatusDto.getOrderStatus()){
            case "ready" : order.updateOrderStatus(OrderStatus.READY); break;
            case "paycomplete" : order.updateOrderStatus(OrderStatus.PAYCOMPLETE); break;
            case "delivery" : order.updateOrderStatus(OrderStatus.DELIVERY); break;
            case "complete" : order.updateOrderStatus(OrderStatus.COMPLETE); break;
        }
        try {
            orderRepository.save(order);
        }catch (Exception e){
            throw new GeneralException(ErrorCode.BAD_REQUEST,"주문 내역 변경에 실패하였습니다.");
        }
        log.info("주문 상태 변경 Success :: 변경된 OrderStatus : {}", order.getOrderStatus());

        return "Success update OrderStatus : "+order.getOrderStatus();
    }

    @Override
    public List<OrderDateDto> getOrderCountByDate() {
        List<OrderDateDto> result = new ArrayList<>();

        for(int i=0;i<10;i++) {
            Calendar st = Calendar.getInstance();
            Calendar ed = Calendar.getInstance();
            st.add(Calendar.DATE, -i-1);
            ed.add(Calendar.DATE,-i);
            Date start = st.getTime();
            Date end = ed.getTime();

            log.info("start :: {} , end :: {}", start, end);

            List<Order> orders = orderRepository.findAllByOrderTime(start, end);
            result.add(new OrderDateDto(end, orders.size()));
        }
        return result;
    }


}
