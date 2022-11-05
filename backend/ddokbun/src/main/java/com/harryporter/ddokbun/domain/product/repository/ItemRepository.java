package com.harryporter.ddokbun.domain.product.repository;

import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.domain.product.entity.TodayItem;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.persistence.LockModeType;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item,Long> {

    @Query("SELECT ti FROM TodayItem ti INNER JOIN ti.item")
    List<TodayItem> findTodayItemFetchItem();



    //해당 레코드에 대해서, 다른 트랙잭션은 읽지도 못한다.
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT i FROM Item i WHERE i.itemSeq = :itemSeq")
    Item findByIdWithWriteLock(@Param("itemSeq") long itemSeq);

    List<Item> findByPlant_RecRateContainingIgnoreCase(String category,Pageable pageable);


    List<Item> findByPlant_RecRate(String category,Pageable pageable);

    @Query("SELECT i FROM Item i " +
            "LEFT OUTER JOIN i.plant p " +
            "WHERE p.recRate= (SELECT p2.recRate FROM Item i2 LEFT OUTER JOIN i2.plant p2 WHERE i2.itemSeq = :itemSeq)")
    List<Item> findItemNameByItemSeq(@Param("itemSeq") long itemSeq, Pageable pageable);

    List<Item> findAllBy(Pageable pageable);

}
