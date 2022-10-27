package com.harryporter.ddokbun.domain.cart.entity;

import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.domain.user.entity.User;
import lombok.Setter;

import javax.persistence.*;

@Table(name="Cart")
@Entity
@Setter
@IdClass(CartId.class)
public class Cart {


    //EmbeddedId에서 식별관계를 지정하는 방식
    //item은 CartId의 필드
    //JoinColumn은 동일
    @Id
    @JoinColumn(name="item_seq",columnDefinition = "INTEGER UNSIGNED")
    @ManyToOne(fetch = FetchType.LAZY)
    private Item item;

    @Id
    @JoinColumn(name="user_seq",columnDefinition="INTEGER UNSIGNED")
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;



    @Column(name = "quantity")
    private Integer quantity;
}
