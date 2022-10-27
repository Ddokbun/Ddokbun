package com.harryporter.ddokbun.domain.cart.entity;

import lombok.Data;

import java.io.Serializable;


@Data
public class CartId  implements Serializable {

    private Long item;


    private Long user;
}
