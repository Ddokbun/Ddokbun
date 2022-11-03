package com.harrypoter.ddokbun_consumer.env.data;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.TimeZone;

//{"temperature": -999.0, "humid": -999.0, "light": 341, "soilHumid": 396, "waterLevel": 0, "motorState": 0, "potSid": "0000000000"}
@Getter
@Setter
public class EnvDto {
    private double temperature;
    private double humid;
    private double light;
    private double soilHumid;
    private double waterLevel;
    private int motorState;
    private String potSid;

    private LocalDateTime time;

    @Override
    public String toString() {
        return "EnvDto{" +
                "temperature=" + temperature +
                ", humid=" + humid +
                ", light=" + light +
                ", soilHumid=" + soilHumid +
                ", waterLevel=" + waterLevel +
                ", motorState=" + motorState +
                ", potSid='" + potSid + '\'' +
                ", time=" + time +
                '}';
    }
}
