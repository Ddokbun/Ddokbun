package com.harrypoter.ddokbun_consumer;

import com.harrypoter.ddokbun_consumer.env.data.EnvDataService;
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
public class KafkaConsumerMain {
    @Autowired
    private EnvDataService envDataService;

    public static void main(String[] args) {
        SpringApplication.run(KafkaConsumerMain.class, args);
    }

    @KafkaListener(topics = "ddokbun_pot_data",groupId ="${spring.kafka.consumer.group-id}")
    public void listen(String in,@Header(KafkaHeaders.RECEIVED_TIMESTAMP) long ts) {




        envDataService.saveEnvData(in,ts);

        System.out.println("========================================================");
        System.out.println(in);
        System.out.println("--------------------------------------------------------");
    }
}
