package com.harryporter.ddokbun.domain.plant.repository;

import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.product.entity.TodayItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PlantRepository extends JpaRepository<Plant, Long> {

    Optional<Plant> findByPlantSeq(long plantSeq);

    @Query("SELECT t.imagePath FROM Plant t WHERE t.plantSeq=:plantSeq")
    String findImagePathByPlantSeq(@Param("plantSeq") long plantSeq);
    Plant findByPlantNameOrPlantNeName(String plantName, String plantNeName);
}
