package com.harryporter.ddokbun.domain.order.service;

import com.harryporter.ddokbun.domain.order.dto.OrderDto;
import com.harryporter.ddokbun.domain.order.dto.request.OrderReq;
import com.harryporter.ddokbun.domain.order.dto.response.OrderDetailDto;
import com.harryporter.ddokbun.domain.order.dto.response.OrderListItemDto;
import com.harryporter.ddokbun.domain.order.entity.Order;
import com.harryporter.ddokbun.domain.order.entity.OrderStatus;
import com.harryporter.ddokbun.domain.order.repository.OrderRepository;
import com.harryporter.ddokbun.domain.plant.dto.PlantDto;
import com.harryporter.ddokbun.domain.product.dto.response.ItemDetailDto;
import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.domain.product.service.ItemService;
import com.harryporter.ddokbun.domain.user.entity.User;
import com.harryporter.ddokbun.domain.user.repository.UserRepository;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

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

        ItemDetailDto itemDetailDto =  itemService.getOneItemById(orderReq.getItemSeq());

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
        order.setOrderTime(LocalDateTime.now());
        order.setOrderWaybillNumber("111-23-12-31-2-1");


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

        Item item = order.getItem();

        OrderDto orderDto = OrderDto.of(order);
        ItemDetailDto itemDetailDto = (ItemDetailDto) ItemDetailDto.of(item);

        if(item.getPlant() != null){
            itemDetailDto.setPlant(PlantDto.of(item.getPlant()));
        }

        OrderDetailDto orderDetailDto = new OrderDetailDto();
        orderDetailDto.setOrderProperty(orderDto,itemDetailDto);

        return orderDetailDto;
    }


}
