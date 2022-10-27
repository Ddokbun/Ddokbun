package com.harryporter.ddokbun.domain.plant.dto;

import com.harryporter.ddokbun.domain.plant.entity.Plant;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class PlantDto {
    private long plantSeq;

    //식물 이름
    private String plantName;

    //식물 학명
    private String plantNeName;

    //식물 영명
    private String plantZRName;

    //식물 유통명
    private String distbName;

    //식물 개원지
    private String originPlace;

    //식물 높이 정보
    private int growthHeight;

    //식물 넓이 정보=
    private int growthWidth;

    //냄새 정보
    private String smellDesc;

    //독성 정보
    private String toxctyInfo;

    //관리 수준
    private String manageLevel;

    //적정 온도
    private String growthTemperature;

    //겨울 최저온도
    private String winterTemperature;


    //습도 적정
    private String growthHumid;

    //특별 관리 정보
    private String specManageInfo;
    //조언 정보
    private String adviseInfo;
    //기능성 정보
    private String functionInfo;
    //관리 요구도
    private String manageRequire;

    //배치 장소 정보
    private String plantPlace;

    //실제 물주기
    private int waterCycle;

    //물주기 설명
    private String waterIfno;

    //광량
    private int light;
    //광량 설명
    private String lightInfo;

    //실제물
    private Integer temperature;
    private String temperatureInfo;
    private String imagePath;
    private String recRate;

    public static PlantDto of(Plant plant){


        PlantDto temp = PlantDto.builder()
                .plantSeq(plant.getPlantSeq()) //식물 seq
                .plantName(plant.getPlantName()) //식물 이름
                .plantNeName(plant.getPlantNeName()) //식물 학명
                .plantZRName(plant.getPlantZRName()) //식물 영명
                .distbName(plant.getDistbName()) //식물 유통명
                .originPlace(plant.getOriginPlace()) //식물 오리진
                .growthHeight(plant.getGrowthHeight())//식물 성장 높이
                .growthWidth(plant.getGrowthWidth()) //식물 넓ㅇ
                .smellDesc(plant.getSmellDesc()) //냄새
                .toxctyInfo(plant.getToxctyInfo()) //독성
                .manageLevel(plant.getManageLevel()) //관리 수준
                .growthTemperature(plant.getGrowthTemperature()) //생육온도
                .winterTemperature(plant.getWinterTemperature()) //겨울온도
                .growthHumid(plant.getGrowthHumid())//습도
                .specManageInfo(plant.getSpecManageInfo())//특관 정보
                . adviseInfo(plant.getAdviseInfo())//조언 정보
                .functionInfo(plant.getFunctionInfo()) //기능성
                .manageRequire(plant.getManageRequire())//관리 요구도
                .plantPlace(plant.getPlantPlace())//배치 장소
                .waterCycle(plant.getWaterCycle())//물주기
                .waterIfno(plant.getWaterIfno())//물 설명
                .light(plant.getLight())//광량
                .lightInfo(plant.getLightInfo())//광량 설명
                .temperature(plant.getTemperature())//온도
                .temperatureInfo(plant.getTemperatureInfo())//온도 설명
                .imagePath(plant.getImagePath())//이미지 저장 경로
                .recRate(plant.getRecRate())//추천 유형
                .build();
        return temp;
    }
}