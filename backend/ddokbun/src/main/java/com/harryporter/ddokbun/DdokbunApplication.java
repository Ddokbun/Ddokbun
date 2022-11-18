package com.harryporter.ddokbun;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
@EnableCaching
public class DdokbunApplication {

	static {
		System.setProperty("com.amazonaws.sdk.disableEc2Metadata", "true");
		//안하면 실행 시점 지연발생
	}
	public static void main(String[] args) {
		SpringApplication.run(DdokbunApplication.class, args);
	}

}
