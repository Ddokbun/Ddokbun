package com.harryporter.ddokbun.domain.cart.entity;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Table(name="Cart")
@Entity
public class Cart {


    @EmbeddedId
    private CartId cartId;
s
    @Column(name = "quantity")
    private Integer quantity;
}
