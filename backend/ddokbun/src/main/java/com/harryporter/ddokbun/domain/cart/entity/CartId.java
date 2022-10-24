package com.harryporter.ddokbun.domain.cart.entity;

import com.harryporter.ddokbun.domain.product.entity.Item;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
public class CartId  implements Serializable {

    @Column(name = "item_seq",nullable = false)
    private Item item;

    //ID 추가 바람
}
