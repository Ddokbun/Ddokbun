package com.harryporter.ddokbun.domain.plant.service;

import com.harryporter.ddokbun.domain.plant.dto.PlantDto;
import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.plant.repository.PlantRepository;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Slf4j
@Service
public class PlantService {

    private final PlantRepository plantRepository;

    public PlantDto getPlant(){
        return PlantDto.of(plantRepository.findByPlantSeq(1).orElse(null));
    }

    public String insertPlant(PlantDto plantDto){
        // 한글 식물명 or 영어 식물명으로 등록된 식물 데이터 check
        if(plantRepository.findByPlantNameOrPlantNeName(plantDto.getPlantName(),plantDto.getPlantNeName())!=null)
            throw new GeneralException(ErrorCode.DUPPLICATE_INPUT,"이미 등록된 식물입니다");
        
        Plant plant = plantDto.toEntity();
        log.info("등록 식물 {}",plant.getPlantName());
        try {
            plantRepository.save(plant);
        }catch (Exception e){
            throw new GeneralException(ErrorCode.BAD_REQUEST,"데이터 등록에 실패했습니다.");
        }
        return "Success";
    }

}
