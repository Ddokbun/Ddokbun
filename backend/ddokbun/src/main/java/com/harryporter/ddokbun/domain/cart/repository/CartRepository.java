package com.harryporter.ddokbun.domain.cart.repository;

import com.harryporter.ddokbun.domain.cart.entity.Cart;
import com.harryporter.ddokbun.domain.cart.entity.CartId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart, CartId> {

}
