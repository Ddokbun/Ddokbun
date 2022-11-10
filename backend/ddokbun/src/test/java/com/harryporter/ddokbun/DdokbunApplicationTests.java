package com.harryporter.ddokbun;

import com.harryporter.ddokbun.utils.fcm.FCMMessageDto;
import com.harryporter.ddokbun.utils.fcm.FCMService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.File;
import java.io.IOException;

@SpringBootTest
class DdokbunApplicationTests {



	@Test
	void contextLoads() {
		System.out.println("테스트 시작");
		System.out.println(File.pathSeparator);


		System.out.println(File.pathSeparatorChar);

		System.out.println(File.separator);

		System.out.println(File.separatorChar);


	}

	@Autowired
	FCMService fcmService;
	@Test
	void a1() throws IOException {

		FCMMessageDto fcmMessageDto = FCMMessageDto.builder()
				.token("c05gvN8hZSWZMmG2u4WrgL:APA91bHFX7WzwGZToCJ6fKQTK3QnvG1pkSh30UpC52XjeoldvAslNUeoZuPyi3WXgGxkSt0oK2C9_1PQ29vvjolvXTPmndHyk0HCU-DdJ4njckXd_G1OZt5K8Ix46-kXbOG8VGjmxaWx")
				.body("손광진 메세지")
				.title("손광진 테스트")
				.build();
		
		//fcmService.sendMessage(fcmMessageDto);

	}

}
