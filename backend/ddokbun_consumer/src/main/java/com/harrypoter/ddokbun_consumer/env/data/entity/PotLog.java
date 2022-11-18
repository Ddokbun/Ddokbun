package com.harrypoter.ddokbun_consumer.env.data.entity;
import com.harrypoter.ddokbun_consumer.env.data.EnvDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class PotLog {

    // 화분로그 번호
    @Id
    @Column(name = "log_seq", columnDefinition = "INTEGER UNSIGNED NOT NULL")
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

    @Column(name = "pot_serial", nullable = false)
    private String potSerial;


    public static PotLog of(EnvDto envDto) {
        PotLog temp  =new PotLog();

        temp.temperature = envDto.getTemperature();
        temp.humudity = envDto.getHumid();
        temp.soilHumidity =envDto.getSoilHumid();
        temp.waterLevel = envDto.getWaterLevel();
        temp.light =envDto.getLight();
        temp.createdTime = LocalDateTime.now();
        temp.potSerial = envDto.getPotSid();
        temp.createdTime = envDto.getTime();
        return temp;

    }
}
