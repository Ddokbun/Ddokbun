package com.harryporter.ddokbun.domain.cart.repository;

import com.harryporter.ddokbun.domain.cart.entity.Cart;
import com.harryporter.ddokbun.domain.cart.entity.CartId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart, CartId> {

    //장바구니를 조회하는데, 상품목록을 더해 response에 추가하기 위해 , 상품정보들도 가져온다.
    //유저를 특정할 시, 1:N관계에서 1:1의 결과 밖에 나오지않지만 일단 해두자.
    @Query("SELECT DISTINCT c FROM Cart c LEFT JOIN FETCH c.item i LEFT JOIN FETCH i.plant WHERE c.user.userSeq = :userSeq")
    List<Cart> findByUserSeqWithFetch(@Param("userSeq") Long userSeq);
}
