package com.harryporter.ddokbun.domain.plant.repository;

import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.plant.entity.Pot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PotRepository extends JpaRepository<Pot, Long> {
    Optional<Pot> findByPotSerial(String potSerial);
    Boolean existsByPotSerial(String potSerial);

}
