package com.harryporter.ddokbun.domain.user.entity;

import com.harryporter.ddokbun.domain.cart.entity.Cart;
import com.harryporter.ddokbun.domain.order.entity.Order;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Table(name="user")
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="user_seq",columnDefinition = "INTEGER UNSIGNED")
    private Long userSeq;

    @Column(name="user_email", nullable = false, unique = true,columnDefinition = "varchar(100)")
    private String userEmail;

    @Column(name="user_nickname",nullable = false, unique = true,columnDefinition = "varchar(50)")
    private String userNickname;

    @Column(name="user_role",nullable = false,columnDefinition = "varchar(20)")
    private String userRole;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="user_created_at")
    private Date createdTime;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="user_updated_at")
    private Date updatedTime;

    //한 유저는 여러개의 주문을 가진다.
    @OneToMany(fetch = FetchType.LAZY,mappedBy = "user")
    private List<Order> orders;

    //한 유저는 여러개의 장바구니 목록을 가진다.
    @OneToMany(fetch = FetchType.LAZY,mappedBy = "user")
    private List<Cart> carts;
}