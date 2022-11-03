package com.harrypoter.ddokbun_consumer.env.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.harrypoter.ddokbun_consumer.env.data.entity.Pot;
import java.util.Optional;

public interface PotRepository extends JpaRepository<Pot, Long> {
    Optional<Pot> findByPotSerial(String potSerial);
    Boolean existsByPotSerial(String potSerial);
}
