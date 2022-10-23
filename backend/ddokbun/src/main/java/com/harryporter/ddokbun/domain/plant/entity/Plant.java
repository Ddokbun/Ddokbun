package com.harryporter.ddokbun.domain.plant.entity;

import javax.persistence.*;

@Entity
public class Plant {
    //식물 일련 번호
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long plantSeq;

    //식물 이름
    @Column(name = "plant_name", columnDefinition = "VARCHAR(255)")
    private String plantName;

    //식물 학명
    @Column(name = "palnt_ne_name", columnDefinition = "VARCHAR(255)")
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
    @Column(name = "light")
    private Integer light;
    //광량 설명
    @Column(name = "light_info")
    private String lightInfo;

    @Column(name = "temperature")

    private Integer teperature;
    @Column(name = "temperature_info")
    private String teperatureInfo;
    @Column(name = "image_path")
    private String imagePath;


}
