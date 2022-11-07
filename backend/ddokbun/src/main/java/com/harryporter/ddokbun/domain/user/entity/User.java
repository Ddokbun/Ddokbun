package com.harryporter.ddokbun.domain.user.entity;

import com.harryporter.ddokbun.domain.cart.entity.Cart;
import com.harryporter.ddokbun.domain.order.entity.Order;
import com.harryporter.ddokbun.domain.plant.entity.Pot;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="user")
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

    @CreationTimestamp
    @Column(name="user_created_at")
    private Date createdTime;

    @UpdateTimestamp
    @Column(name="user_updated_at")
    private Date updatedTime;

    //한 유저는 여러개의 주문을 가진다.
    @OneToMany(fetch = FetchType.LAZY,mappedBy = "user")
    private List<Order> orders;

    //한 유저는 여러개의 장바구니 목록을 가진다.
    @OneToMany(fetch = FetchType.LAZY,mappedBy = "user")
    private List<Cart> carts;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
    private List<Pot> pots;

    public void changeNickName(String nickName){
        this.userNickname = nickName;
    }
    public void changeUserRole(String userRole){
        this.userRole = userRole;
    }
}