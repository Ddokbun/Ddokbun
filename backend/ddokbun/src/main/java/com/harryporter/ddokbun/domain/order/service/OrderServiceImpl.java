package com.harryporter.ddokbun.domain.order.service;

import com.harryporter.ddokbun.domain.order.dto.OrderDto;
import com.harryporter.ddokbun.domain.order.dto.request.OrderReq;
import com.harryporter.ddokbun.domain.order.dto.request.OrderStatusDto;
import com.harryporter.ddokbun.domain.order.dto.response.OrderDetailDto;
import com.harryporter.ddokbun.domain.order.dto.response.OrderListItemDto;
import com.harryporter.ddokbun.domain.order.entity.Order;
import com.harryporter.ddokbun.domain.order.entity.OrderStatus;
import com.harryporter.ddokbun.domain.order.repository.OrderRepository;
import com.harryporter.ddokbun.domain.plant.repository.dto.PlantDto;
import com.harryporter.ddokbun.domain.product.dto.ItemDto;
import com.harryporter.ddokbun.domain.product.dto.response.ItemDetailDto;
import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.domain.product.service.ItemService;
import com.harryporter.ddokbun.domain.user.entity.User;
import com.harryporter.ddokbun.domain.user.repository.UserRepository;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final ItemService itemService;

    @Override
    public List<OrderListItemDto> getOrderListByUserSeq(Long userSeq) {

        User user =  userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND)
        );

        List<Order> orders = orderRepository.findByUserSeq(user);

        List<OrderListItemDto> orderListItemDtoList = orders.stream().map(
                (order)->{
                    return OrderListItemDto.of(order);
                }
        ).collect(Collectors.toList());
        return orderListItemDtoList;

    }

    @Override
    @Transactional
    public OrderDto enrollOrder(OrderReq orderReq, Long userSeq) {

        User user = userRepository.findById(userSeq).orElseThrow(
                ()->new GeneralException(ErrorCode.NOT_FOUND)
        );

        itemService.decreaseQuantity(orderReq.getItemSeq(),orderReq.getOrderQuantity());
        //item의 수량을 확인하고 제거하고, order에 올려줘야함
        ItemDetailDto itemDetailDto =  itemService.getOneItemById(orderReq.getItemSeq());




        //Entity 설저 영역, 따로 뺴던가 해야할 듯
        Order order = new Order();
        order.setOrderAddress(orderReq.getOrderAddress());//주소
        order.setOrderEmail(orderReq.getOrderEmail());//이메일
        order.setOrderMethod(orderReq.getOrderMethod());//결제 방식
        order.setOrderPhone(orderReq.getOrderPhone());//폰
        order.setOrderPrice(itemDetailDto.getItemPrice() * orderReq.getOrderPrice()); //총가
        order.setOrderQuantity(order.getOrderQuantity()); // 수량
        order.setUser(user); //유저
        Item item = new Item();
        item.setItemSeq(orderReq.getItemSeq()); //아이템
        order.setItem(item);
        order.setOrderReciver(orderReq.getOrderReceiver());
        order.setOrderStatus(OrderStatus.READY);
        order.setOrderMethod(orderReq.getOrderMethod());//결제방식
        order.setOrderTime(orderReq.getOrderTime());
        order.setOrderWaybillNumber("111-23-12-31-2-1");
        order.setOrderQuantity(orderReq.getOrderQuantity());
        order.setOrderUserName(orderReq.getOrderUserName());


        orderRepository.save(order);

        return OrderDto.of(order);
    }

    @Override
    public OrderDetailDto getOrderDetail(Long orderSeq, Long userSeq) {

        Order order =  orderRepository.findById(orderSeq).orElseThrow(
                ()->new GeneralException(ErrorCode.NOT_FOUND,"해당하는 주문 내역을 찾을 수 없습니다,")
        );

        if(order.getUser().getUserSeq().compareTo(userSeq) != 0){
            throw  new GeneralException(ErrorCode.DATA_ACCESS_ERROR,"ACCESS DENIED");
        };

        //주문으로 부터 아이템을 가져온다.
        Item item = order.getItem();
        //Entity 속성을 맵핑되는 DTO에 삽입
        OrderDto orderDto = OrderDto.of(order);

        //너많은 정보를 추가한 DTO 생성
        ItemDetailDto itemDetailDto = new ItemDetailDto();
        //ItemDto <- ItemDetailDto 상속관계이기에, 상속 받은 필드들을 설정해준다.
        itemDetailDto.copy(ItemDto.of(item));

        //아이템이 식물이면 ,식물 속성들을 채워준다.
        if(item.getPlant() != null){
            itemDetailDto.setPlant(PlantDto.of(item.getPlant()));
        }

        //OrderDetailDto를 생성하고
        OrderDetailDto orderDetailDto = new OrderDetailDto();
        //Order의 속성을 채워주고 , Item속성을 채워주고, 식물이면 Plant속성을 채워준다.
        orderDetailDto.setOrderProperty(orderDto,itemDetailDto);

        return orderDetailDto;
    }

    @Override
    public String updateOrderStatus(OrderStatusDto orderStatusDto){
        Order order = orderRepository.findById(orderStatusDto.getOrderSeq()).orElseThrow(
                ()->new GeneralException(ErrorCode.NOT_FOUND,"해당하는 주문 내역을 찾을 수 없습니다,"));

        log.info("현재 주문 상태 : {}, 변경할 주문 상태 : {}",order.getOrderStatus(),orderStatusDto.getOrderStatus());
        switch (orderStatusDto.getOrderStatus()){
            case "ready" : order.updateOrderStatus(OrderStatus.READY); break;
            case "delivery" : order.updateOrderStatus(OrderStatus.DELIVERY); break;
            case "complete" : order.updateOrderStatus(OrderStatus.COMPLETE); break;
        }
        try {
            orderRepository.save(order);
        }catch (Exception e){
            throw new GeneralException(ErrorCode.BAD_REQUEST,"주문 내역 변경에 실패하였습니다.");
        }
        log.info("요청 상태 : {},  변경 후 주문 상태 : {}",orderStatusDto.getOrderSeq(),order.getOrderStatus());

        return "Success update OrderStatus : "+order.getOrderStatus();
    }


}
