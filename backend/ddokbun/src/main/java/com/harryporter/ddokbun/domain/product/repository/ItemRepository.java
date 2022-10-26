package com.harryporter.ddokbun.domain.product.repository;

import com.harryporter.ddokbun.domain.product.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item,Long> {

}
