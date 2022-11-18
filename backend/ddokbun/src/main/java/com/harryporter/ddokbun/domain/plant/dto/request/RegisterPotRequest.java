package com.harryporter.ddokbun.domain.plant.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Data
public class RegisterPotRequest {
    // 화분 번호
    private String potSerial;

    // 화분 닉네임
    private String plantNickname;

    // 마지막 물 준날
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd", timezone = "Asia/Seoul")
//    @DateTimeFormat(pattern = "yyyy-MM-dd kk:mm:ss")
    private LocalDate waterSupply;

    // 식물 번호
    private int plantSeq;
}
