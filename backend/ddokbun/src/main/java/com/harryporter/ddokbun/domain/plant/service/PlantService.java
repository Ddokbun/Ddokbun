package com.harryporter.ddokbun.domain.plant.service;

import com.harryporter.ddokbun.domain.plant.dto.PlantDto;
import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.plant.repository.PlantRepository;
import com.harryporter.ddokbun.domain.plant.dto.response.PlantInfoAllReponse;
import com.harryporter.ddokbun.domain.plant.dto.response.SearchPlantInfoResponse;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Slf4j
@Service
public class PlantService {

    private final PlantRepository plantRepository;

    public PlantDto getPlant(){
        return PlantDto.of(plantRepository.findByPlantSeq(1).orElse(null));
    }

    public String insertPlant(PlantDto plantDto){
        log.info("식물 데이터 등록 Service :: plant Name : {}", plantDto.getPlantName());
        if(plantRepository.findByPlantNameOrPlantNeName(plantDto.getPlantName(),plantDto.getPlantNeName())!=null)
            throw new GeneralException(ErrorCode.DUPPLICATE_INPUT,"이미 등록된 식물입니다");

        try {
            plantRepository.save(plantDto.toEntity());
        }catch (Exception e){
            throw new GeneralException(ErrorCode.BAD_REQUEST,"데이터 등록에 실패했습니다.");
        }
        log.info("식물 데이터 등록 Success :: ");
        return "Success";
    }

    public String updatePlant(PlantDto plantDto){
        log.info("식물 데이터 변경 Service :: plant Name : {}", plantDto.getPlantName());
        Plant oldPlant=plantRepository.findByPlantSeq(plantDto.getPlantSeq()).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND, "식물을 찾을 수 없습니다."));
        oldPlant.changePlant(plantDto);
        try {
            plantRepository.save(oldPlant);
        }catch (Exception e){
            throw new GeneralException(ErrorCode.BAD_REQUEST,"데이터 변경에 실패했습니다.");
        }
        log.info("식물 데이터 변경 Success :: plant Name : {}", plantDto.getPlantName());
        return "Success";
    }

    @Transactional
    public List<PlantInfoAllReponse> getPlantInfo(){
        List<Plant> plants = plantRepository.findAll();
        List<PlantInfoAllReponse> plantsList = plants.stream().map(plant -> PlantInfoAllReponse.of(plant)).collect(Collectors.toList());
        return plantsList;
    }

    @Transactional
    public SearchPlantInfoResponse searchPlantInfo(Long plantSeq){
        Plant plant = plantRepository.findByPlantSeq(plantSeq).orElseThrow(
                () -> new GeneralException(ErrorCode.NOT_FOUND)
        );

        SearchPlantInfoResponse searchPlantInfoResponse = SearchPlantInfoResponse.of(plant);
        return searchPlantInfoResponse;
    }
}
