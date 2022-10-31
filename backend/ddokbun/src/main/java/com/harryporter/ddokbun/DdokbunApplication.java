package com.harryporter.ddokbun;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class DdokbunApplication {

	public static void main(String[] args) {
		SpringApplication.run(DdokbunApplication.class, args);
	}

}
