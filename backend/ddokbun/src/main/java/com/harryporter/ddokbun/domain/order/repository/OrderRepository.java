package com.harryporter.ddokbun.domain.order.repository;

import com.harryporter.ddokbun.domain.order.entity.Order;
import com.harryporter.ddokbun.domain.user.entity.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {
//    @Query("SELECT o FROM Order o LEFT JOIN FETCH i.plant WHERE o.user = :user")
//    List<Order> findByUserSeq(@Param("user") User user);

    @Query("SELECT o FROM Order o WHERE o.orderTime >= :start AND o.orderTime <= :end")
    List<Order> findAllByOrderTime(@Param("start") Date start, @Param("end") Date end);

    List<Order> findAllBy(Pageable pageable);

    List<Order> findByUser(User user);

    Optional<Order> findByOrderSeq(Long orderSeq);
}
