package com.harryporter.ddokbun.domain.plant.repository;

import com.harryporter.ddokbun.domain.plant.dto.response.PotTemperatureLogResponse;
import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.plant.entity.Pot;
import com.harryporter.ddokbun.domain.plant.entity.PotLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PotLogRepository extends JpaRepository<PotLog, Long> {
//    @Query(value = "select a.temperature, a.temperature from PotLog a where a.pot.potSerial = :potSerial order by a.createdTime desc  ")
//    PotTemperatureLogResponse findTemperatureLog();

    List<PotLog> findTop30ByPot_PotSerialOrderByCreatedTimeDesc(String potSerial);
    void deleteAllByPot_PotSerial(String potSerial);

}
