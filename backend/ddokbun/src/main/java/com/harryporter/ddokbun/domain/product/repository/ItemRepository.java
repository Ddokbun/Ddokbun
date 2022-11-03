package com.harryporter.ddokbun.domain.product.repository;

import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.domain.product.entity.TodayItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.persistence.LockModeType;
import org.springframework.data.domain.Pageable;
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

    @Query("SELECT t.itemName FROM Item t WHERE t.itemSeq=:itemSeq")
    String findItemNameByItemSeq(@Param("itemSeq") long itemSeq);

}
