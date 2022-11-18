package com.harrypoter.ddokbun_consumer;

import com.harrypoter.ddokbun_consumer.env.data.EnvDataService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.TimeZone;

@SpringBootApplication
@Slf4j
public class KafkaConsumerMain {
    @Autowired
    private EnvDataService envDataService;

    public static void main(String[] args) {
        log.info("버전 : 2022-11-08 T 15:27}");
        System.setProperty("spring.profiles.default", "local");
        SpringApplication.run(KafkaConsumerMain.class, args);
    }

    @KafkaListener(topics = "ddokbun_pot_data",groupId ="${spring.kafka.consumer.group-id}")
    public void listen(@org.springframework.messaging.handler.annotation.Payload String in,@Header(KafkaHeaders.RECEIVED_TIMESTAMP) long ts) {

        log.info("컨슘 메세지 : {}",in);
        envDataService.saveEnvData(in,ts);

        log.info("========================================================");
        log.info(in);
        log.info("--------------------------------------------------------");
    }
}
