package com.harryporter.ddokbun.domain.plant.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class PotLog {

    // 화분로그 번호
    @Id
    @Column(name = "log_seq", columnDefinition = "UNSIGNED INT NOT NULL")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long logSeq;

    @Column(name = "temperature", nullable = false)
    private Double temperature;

    @Column(name = "humudity", nullable = false)
    private Double humudity;

    @Column(name = "soil_humidity", nullable = false)
    private Double soilHumidity;

    @Column(name = "water_level", nullable = false)
    private Double waterLevel;

    @Column(name = "light", nullable = false)
    private Double light;

    @Column(name = "create_time", nullable = false)
    private LocalDateTime createdTime;

    @JoinColumn(name = "pot_serial", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private Pot pot;
}
