package com.harryporter.ddokbun.domain.order.entity;

import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.domain.user.entity.User;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tb_order") //mysql 예약어
public class Order {

    //주문 일련 번호
    @Id
    @Column(columnDefinition = "INTEGER UNSIGNED")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long orderSeq;

    //멤버
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_seq",nullable = false)
    private User user;

    @Column(nullable = false)
    private String itemSeqList;

    @Column(nullable = false)
    private String orderName;

    //상품 수량
    @Column(nullable = false)
    private Integer orderQuantity;

    //상품 가격
    @Column(nullable = false)
    private Integer orderPrice;

    //주문자명, 주문자의 이름
    @Column(columnDefinition = "NVARCHAR(10)",nullable = false)
    private String orderUserName;

    //주문자 연락처
    @Column(columnDefinition = "VARCHAR(20) ",nullable = false)
    private String orderPhone;

    //주문자 이메일
    @Column(columnDefinition = "VARCHAR(100) ",nullable = false)
    private String orderEmail;

    //수령인 명
    @Column(columnDefinition = "NVARCHAR(10)",nullable = false)
    private String orderReciver;

    //배송지 주소
    @Column(columnDefinition = "VARCHAR(255) ",nullable = false)
    private String orderAddress;

    //운송장 번호
    @Column(columnDefinition = "VARCHAR(255) ",nullable = false)
    private String orderWaybillNumber;

    //결제수단
    @Column(columnDefinition = "VARCHAR(50) ",nullable = false)
    private String orderMethod;

    //결제 시간
    @CreationTimestamp
    @Column(nullable = false)
    private Date orderTime;

    //주문 상태
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;


    @PrePersist
    public void setting(){
        this.orderTime = new Date(); //서버 돌아가는 컴퓨터 시간대의 현재
        orderStatus = OrderStatus.READY;
    }

    public void updateOrderStatus(OrderStatus orderStatus){
        this.orderStatus = orderStatus;
    }



}
