package com.harryporter.ddokbun.domain.order.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.*;
import java.time.LocalDateTime;

@Getter
@Setter
public class OrderReq {

    @NotNull
    private Long itemSeq;

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

}
