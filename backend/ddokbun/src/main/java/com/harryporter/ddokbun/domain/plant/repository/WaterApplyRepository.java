package com.harryporter.ddokbun.domain.plant.repository;

import com.harryporter.ddokbun.domain.plant.entity.WaterApply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface WaterApplyRepository extends JpaRepository<WaterApply, Long> {

    @Query("SELECT A.waterSupplyDate From WaterApply A WHERE A.pot.potSerial = :potSerial AND A.waterSupplyDate >= :firstDate AND A.waterSupplyDate <= :lastDate  ORDER BY A.waterSupplyDate DESC" )
    List<LocalDate> findPotWaterLog(@Param("potSerial") String potSerial, @Param("firstDate") LocalDate firstDate, @Param("lastDate") LocalDate lastDate);
//    List<WaterApply> findWaterApplyByWaterSupplyDateContainingIgnoreCase(LocalDate date);
//    List<WaterApply> findAllByWaterSupplyDateContainingIgnoreCase(String date);

    @Modifying(clearAutomatically = true)
    void deleteAllByPot_PotSerial(String potSerial);
}
