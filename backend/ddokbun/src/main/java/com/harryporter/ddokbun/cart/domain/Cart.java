package com.harryporter.ddokbun.cart.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Table(name="Cart")
@Entity
public class Cart {

    @Column(name = "quantity")
    private Integer quantity;
}
