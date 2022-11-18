package com.harryporter.ddokbun.domain.order.service;

import com.harryporter.ddokbun.domain.cart.repository.CartRepository;
import com.harryporter.ddokbun.domain.order.dto.OrderDto;
import com.harryporter.ddokbun.domain.order.dto.request.OrderReq;
import com.harryporter.ddokbun.domain.order.dto.request.OrderStatusDto;
import com.harryporter.ddokbun.domain.order.dto.response.AdminOrderDto;
import com.harryporter.ddokbun.domain.order.dto.response.OrderDateDto;
import com.harryporter.ddokbun.domain.order.entity.Order;
import com.harryporter.ddokbun.domain.order.entity.OrderStatus;
import com.harryporter.ddokbun.domain.order.repository.OrderRepository;
import com.harryporter.ddokbun.domain.product.dto.response.ItemSimpleDto;
import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.domain.product.repository.ItemRepository;
import com.harryporter.ddokbun.domain.product.service.ItemService;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import com.harryporter.ddokbun.domain.user.entity.User;
import com.harryporter.ddokbun.domain.user.repository.UserRepository;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{

    private final OrderRepository orderRepository;
    private final ItemRepository itemRepository;
    private final UserRepository userRepository;
    private final CartRepository cartRepository;
    private final ItemService itemService;

    @Override
    public List<OrderDto> getOrderListByUserSeq(Long userSeq,String status) {

        User user =  userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND));
        List<Order> orders=null;
        if(status==null)
            orders = orderRepository.findByUser(user);
        else {
            OrderStatus orderStatus=null;
            switch (status){
                case "ready" : orderStatus=OrderStatus.READY; break;
                case "paycomplete" : orderStatus=(OrderStatus.PAYCOMPLETE); break;
                case "delivery" : orderStatus=(OrderStatus.DELIVERY); break;
                case "complete" : orderStatus=(OrderStatus.COMPLETE); break;
            }
            orders = orderRepository.findByUserAndOrderStatus(user, orderStatus);

        }

        List<OrderDto> orderList = new ArrayList<>();
        for(int i=0;i<orders.size();i++){
            OrderDto order = OrderDto.of(orders.get(i));
            List<ItemSimpleDto> itemList = Arrays.asList(orders.get(i).getItemSeqList().split(",")).stream().map(
                    item -> ItemSimpleDto.of(itemRepository.findById(Long.parseLong(item)).orElse(null))).collect(Collectors.toList());
            order.setItemlist(itemList);
            orderList.add(order);
        }
        return orderList;

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

        List<ItemSimpleDto> itemList = itemSeqList.stream().map(
                item -> ItemSimpleDto.of(itemRepository.findById(Long.parseLong(item)).orElse(null))).collect(Collectors.toList());


        //주문으로 부터 아이템을 가져온다.
    //    Item item = order.getItem();
        //Entity 속성을 맵핑되는 DTO에 삽입
        OrderDto orderDto = OrderDto.of(order);
        orderDto.setItemlist(itemList);

        return orderDto;
    }

    @Override
    public List<AdminOrderDto> getTotalOrderList(Pageable pageable){
        List<Order> orders=orderRepository.findAllBy(pageable);

        List<AdminOrderDto> list = orders.stream()
                .filter(order -> order.getItemSeqList() != null)
                .map(order -> AdminOrderDto.of(order)).collect(Collectors.toList());

        return list;
    }

    @Override
    @Transactional
    public String updateOrderStatus(OrderStatusDto orderStatusDto, UserDto userDto){
        log.info("주문 상태 변경 Service :: 변경할 OrderStatus : {}", orderStatusDto.getOrderStatus());
        
        User user = userRepository.findByUserSeq(userDto.getUserSeq()).orElseThrow(
                ()->new GeneralException(ErrorCode.NOT_FOUND,"해당 사용자를 찾을 수 없습니다"));
        
        Order order = orderRepository.findByOrderSeq(orderStatusDto.getOrderSeq()).orElseThrow(
                ()->new GeneralException(ErrorCode.NOT_FOUND,"해당하는 주문 내역을 찾을 수 없습니다,"));

        log.info("현재 주문 상태 : {}, 변경할 주문 상태 : {}",order.getOrderStatus(),orderStatusDto.getOrderStatus());
        switch (orderStatusDto.getOrderStatus()){
            case "ready" : order.updateOrderStatus(OrderStatus.READY); break;
            case "paycomplete" :
                order.updateOrderStatus(OrderStatus.PAYCOMPLETE);
                List<String> itemSeqList = Arrays.asList(order.getItemSeqList().split(","));
                for(String itemSeq : itemSeqList ){
                    Item item =itemRepository.findById(Long.parseLong(itemSeq)).orElse(null);
                    try {
                        cartRepository.deleteByUserAndItem(user, item);
                    }catch (Exception e){
                        log.info("삭제할 수 없습니다");
                    }
                }
                break;
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
