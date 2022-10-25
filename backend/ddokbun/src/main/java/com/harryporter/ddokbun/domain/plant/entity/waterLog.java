package com.harryporter.ddokbun.domain.plant.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class waterLog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "water_supply_seq", columnDefinition = "UNSIGNED INT NOT NULL")
    private Long waterSupplySeq;

    @Column(name = "water_supply_date", nullable = false)
    private LocalDateTime waterSupplyDate;

    @JoinColumn(name = "pot_serial", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private Pot pot;
}
