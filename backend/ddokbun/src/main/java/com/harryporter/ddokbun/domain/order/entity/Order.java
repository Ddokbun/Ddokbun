package com.harryporter.ddokbun.domain.order.entity;

import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.domain.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
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

    //상품
    //상품에서 주문내역을 볼 필요는 없으니깐 , 상대편에서 mappedBy는 생략, 관리자가 생기면 추가해야할 듯
    @JoinColumn(name = "item_seq",nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private Item item;

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
    @Column(nullable = false)
    private LocalDateTime orderTime;

    //주문 상태
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;



    @PrePersist
    public void setting(){
        this.orderTime = LocalDateTime.now(); //서버 돌아가는 컴퓨터 시간대의 현재
        orderStatus = OrderStatus.READY;
    }



}
