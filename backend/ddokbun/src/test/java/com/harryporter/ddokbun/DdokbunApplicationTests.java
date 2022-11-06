package com.harryporter.ddokbun;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.File;

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

}
