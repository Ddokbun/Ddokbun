package com.harrypoter.ddokbun_consumer.env.data.repository;

import com.harrypoter.ddokbun_consumer.env.data.entity.PotLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PotLogRepository extends JpaRepository<PotLog, Long> {

}
