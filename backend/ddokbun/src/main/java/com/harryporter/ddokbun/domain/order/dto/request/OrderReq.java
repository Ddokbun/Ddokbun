package com.harryporter.ddokbun.domain.order.dto.request;

import com.harryporter.ddokbun.domain.order.entity.Order;
import com.harryporter.ddokbun.domain.order.entity.OrderStatus;
import com.harryporter.ddokbun.domain.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Setter
public class OrderReq {

    private String itemSeqList;

    private String orderName;

    @NotNull
    @Min(value = 1,message = "주문 수량은 1이상이어야 합니다.")
    private Integer orderQuantity;

    @NotNull
    @Min(value = 1,message = "가격은 0원 이상이어야 합니다.")
    private Integer orderPrice;

    //주문자 명
    @Size(min = 1,message = "주문자 명을 입력해야합니다.")
    private String orderUserName;

    @Size(min = 1,message = "전화번호를 입력해야합니다.")
    private String orderPhone;


    @Size(min=1,message = "이메일을 입력해야합니다.")
    @Pattern(regexp = "^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$",message = "이메일 형식이 올바르지 않습니다.")
    private String orderEmail;

    @Size(min=1,message = "수신인을 입력해야합니다.")
    private String orderReceiver;

    @Size(min=1,message = "주소를 입력해야합니다.")
    private String orderAddress;

    @Size(min = 1,message = "결제 형식을 입력해야합니다.")
    private String orderMethod;


    public Order toEntity(User user){
        return Order.builder()
                .orderName(orderName)
                .orderAddress(orderAddress)
                .orderEmail(orderEmail)
                .orderMethod(orderMethod)
                .orderPhone(orderPhone)
                .orderPrice(orderPrice)
                .orderQuantity(orderQuantity)
                .orderReciver(orderReceiver)
                .orderStatus(OrderStatus.READY)
                .orderWaybillNumber("111-23-12-31-2-1")
                .orderUserName(orderUserName)
                .itemSeqList(itemSeqList)
                .user(user)
                .build();
    }


}
