package com.harryporter.ddokbun.domain.plant.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor
public class WaterApply {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "water_supply_seq", columnDefinition = "INTEGER UNSIGNED NOT NULL")
    private Long waterSupplySeq;

    @Column(name = "water_supply_date", nullable = false)
    private LocalDate waterSupplyDate;

    @JoinColumn(name = "pot_serial", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private Pot pot;


    public WaterApply(Pot pot) {
        //현재 시간 들고오기
        this.waterSupplyDate = LocalDate.now();
        this.pot = pot;
    }
}
