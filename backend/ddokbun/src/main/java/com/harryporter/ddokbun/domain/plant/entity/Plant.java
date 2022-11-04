package com.harryporter.ddokbun.domain.plant.entity;

import com.harryporter.ddokbun.domain.plant.dto.PlantDto;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Plant {
    //식물 일련 번호
    @Id
    @Column(name="plant_seq")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long plantSeq;

    //식물 이름
    @Column(name = "plant_name", columnDefinition = "VARCHAR(255)")
    private String plantName;

    //식물 학명
    @Column(name = "palnt_ne_name", columnDefinition = "VARCHAR(255)" )
    private String plantNeName;

    //식물 영명
    @Column(name = "plant_zr_name", columnDefinition = "VARCHAR(255)")
    private String plantZRName;

    //식물 유통명
    @Column(name = "distb_name", columnDefinition = "VARCHAR(255)")
    private String distbName;

    //식물 개원지
    @Column(name = "origin_place", columnDefinition = "VARCHAR(255)")
    private String originPlace;

    //식물 높이 정보
    @Column(name = "growth_height")
    private Integer growthHeight;

    //식물 넓이 정보
    @Column(name = "growth_width")
    private Integer growthWidth;

    //냄새 정보
    @Column(name = "smell_desc", columnDefinition = "CHAR(20)")
    private String smellDesc;

    //독성 정보
    @Column(name = "toxcty_info", columnDefinition = "CHAR(100)")
    private String toxctyInfo;

    //관리 수준
    @Column(name = "manage_level", columnDefinition = "CHAR(10)")
    private String manageLevel;

    //적정 온도
    @Column(name = "growth_temperature", columnDefinition = "CHAR(20)")
    private String growthTemperature;

    //겨울 최저온도
    @Column(name = "winter_temperature", columnDefinition = "CHAR(20)")
    private String winterTemperature;


    //습도 적정
    @Column(name = "growth_humid", columnDefinition = "VARCHAR(20)")
    private String growthHumid;

    //특별 관리 정보
    @Column(name = "spec_manage_info", length = 500)
    private String specManageInfo;
    //조언 정보
    @Column(name = "advise_info", length = 500)
    private String adviseInfo;
    //기능성 정보
    @Column(name = "function_info", length = 500)
    private String functionInfo;
    //관리 요구도
    @Column(name = "manage_require", columnDefinition = "CHAR(50)")
    private String manageRequire;

    //배치 장소 정보
    @Column(name = "plant_place", length = 255)
    private String plantPlace;

    //실제 물주기
    @Column(name = "water_cycle")
    private Integer waterCycle;

    //물주기 설명
    @Column(name = "water_info", length = 255)
    private String waterIfno;

    //광량
    @Column(name = "light_type")
    private Integer lightType;
    //광량 설명
    @Column(name = "light_info")
    private String lightInfo;

    @Column(name = "min_temperature")

    private Integer minTemperature;

    @Column(name = "max_temperature")
    private Integer maxTemperature;
    @Column(name = "temperature_info")
    private String temperatureInfo;
    @Column(name = "image_path")
    private String imagePath;

    @Column(name = "rec_rate")
    private String recRate;

    public void changeImgPath(long plantSeq){
        this.imagePath="plant/"+plantSeq+".jpg";
    }

    public void changePlant(PlantDto plant){
        this.plantName=plant.getPlantName();
        this.plantNeName=plant.getPlantNeName();
        this.plantZRName=plant.getPlantZRName();
        this.distbName=plant.getDistbName();
        this.originPlace=plant.getOriginPlace();
        this.growthHeight=plant.getGrowthHeight();
        this.growthWidth=plant.getGrowthWidth();
        this.smellDesc=plant.getSmellDesc();
        this.toxctyInfo=plant.getToxctyInfo();
        this.manageLevel=plant.getManageLevel();
        this.growthTemperature=plant.getGrowthTemperature();
        this.winterTemperature=plant.getWinterTemperature();
        this.growthHumid=plant.getGrowthHumid();
        this.specManageInfo=plant.getSpecManageInfo();
        this.adviseInfo=plant.getAdviseInfo();
        this.functionInfo=plant.getFunctionInfo();
        this.manageRequire=plant.getManageRequire();
        this.plantPlace=plant.getPlantPlace();
        this.waterCycle=plant.getWaterCycle();
        this.waterIfno=plant.getWaterInfo();
        this.lightType=plant.getLightType();
        this.lightInfo=plant.getLightInfo();
        this.minTemperature=plant.getMinTemperature();
        this.maxTemperature=plant.getMaxTemperature();
        this.temperatureInfo=plant.getTemperatureInfo();
        this.imagePath=plant.getImagePath();
        this.recRate=plant.getRecRate();

    }

}
