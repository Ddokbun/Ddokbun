package com.harrypoter.ddokbun_consumer.env.data.repository;

import com.harrypoter.ddokbun_consumer.env.data.entity.WaterApply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface WaterApplyRepository extends JpaRepository<WaterApply, Long> {

}
