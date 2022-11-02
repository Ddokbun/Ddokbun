package com.harryporter.ddokbun;

import com.harryporter.ddokbun.domain.plant.dto.MotorActionDto;
import com.harryporter.ddokbun.domain.plant.service.WaterApplyUtil;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.File;

@SpringBootTest
class DdokbunApplicationTests {


	@Autowired
	public WaterApplyUtil waterApplyUtil;

	@Test
	@DisplayName("카프카에 토픽 전송되는 지 테스트")
	void givenTopicWhenProduceThenCheck(){
		waterApplyUtil.sendMotorAction(MotorActionDto.of("test11"));

	}

	@Test
	void contextLoads() {
		System.out.println("테스트 시작");
		System.out.println(File.pathSeparator);


		System.out.println(File.pathSeparatorChar);

		System.out.println(File.separator);

		System.out.println(File.separatorChar);


	}

}
