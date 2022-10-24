package com.harryporter.ddokbun.domain.cart.entity;

import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.domain.user.entity.User;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import java.io.Serializable;


@Data
public class CartId  implements Serializable {

    private Long item;

    private Long user;
}
