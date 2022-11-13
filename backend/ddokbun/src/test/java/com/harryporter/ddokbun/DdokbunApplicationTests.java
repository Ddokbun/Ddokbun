package com.harryporter.ddokbun;

import com.harryporter.ddokbun.domain.plant.repository.PotRepository;
import com.harryporter.ddokbun.domain.plant.service.PotService;
import com.harryporter.ddokbun.schedule.BatchProcessor;
import com.harryporter.ddokbun.utils.fcm.FCMMessageDto;
import com.harryporter.ddokbun.utils.fcm.FCMService;
import org.junit.jupiter.api.Test;
import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.time.LocalDate;

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


	@Autowired
	public BatchProcessor batchProcessor;

	@Autowired
	public PotRepository c;
	@Test
	void autoWaterTest() throws JobInstanceAlreadyCompleteException, JobExecutionAlreadyRunningException, JobParametersInvalidException, JobRestartException {

		System.out.println(LocalDate.now());
		batchProcessor.autoWaterApplyJobScheduled();
	}

	@Test
	void waterAlarmTest() throws JobInstanceAlreadyCompleteException, JobExecutionAlreadyRunningException, JobParametersInvalidException, JobRestartException {

		System.out.println(LocalDate.now());
		batchProcessor.waterApplyAlarmJobScheduled();
	}

	@Test
	void waterLevelAlarmTest() throws Exception{
		batchProcessor.waterLevelAlarmJobScheduled();
	}


	@Autowired
	public PotService potService;
	@Test
	void updatePotWaterApplyTest(){

		potService.applyWater("0000000000",145L);
	}
}
