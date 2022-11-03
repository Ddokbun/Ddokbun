package com.harrypoter.ddokbun_consumer.env.data.entity;
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

    @Column(name = "pot_serial", nullable = false)
    private String potSerial;

}
