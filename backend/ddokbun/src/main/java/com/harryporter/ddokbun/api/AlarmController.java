package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.alarm.res.AlarmLogResponse;
import com.harryporter.ddokbun.domain.alarm.service.AlarmService;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;
import java.util.Map;

@RequestMapping("/alarm")
@RestController
@RequiredArgsConstructor
public class AlarmController {

    private final AlarmService alarmService;

    @PostMapping(value = "",consumes = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "알람 설정(token : 값)")
    public ResponseEntity<?> setUserAlarm(@RequestBody Map<String,String> body, @ApiIgnore @AuthenticationPrincipal UserDto principal){
       String token =  body.get("token");
        alarmService.setToken(token,principal);

        ResponseFrame<?> res = ResponseFrame.ofOKResponse("알람 토큰 설정 성공","");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }


    @GetMapping(value = "/logs")
    @ApiOperation(value = "자신의 알람 내역 가져오기")
    public ResponseEntity<?> getMyAlarmHisory(@RequestParam(required = false) Long lastSeq,@ApiIgnore @AuthenticationPrincipal UserDto principal){

        List<AlarmLogResponse> alarmLogResponseList =  alarmService.getAlarmLogsByUserSeq(lastSeq,principal.getUserSeq());


        ResponseFrame<?> res = ResponseFrame.ofOKResponse("자신의 알람 내역을 반환합니다.",alarmLogResponseList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
