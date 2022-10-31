package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.plant.dto.request.RegisterPotRequest;
import com.harryporter.ddokbun.domain.plant.dto.response.RegisterPotResponse;
import com.harryporter.ddokbun.domain.plant.service.PotService;
import com.harryporter.ddokbun.domain.user.dto.UserDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

@RequestMapping("/pot")
@RestController
@RequiredArgsConstructor
@Api(tags = "화분 CRUD API")
@Slf4j
public class PotController {
    private final PotService potService;

    //화분 등록
    // 유저가 자신의 화분을 등록한다.
    @ApiOperation(value = "화분 등록")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> registerPot(@RequestBody RegisterPotRequest registerPotRequest,@ApiIgnore @AuthenticationPrincipal UserDto principal) {
        // 나중에 실제 유저가 들어오면 삭제할 로직
        UserDto userDto = ((UserDto)principal);

        log.info("화분 등록 컨트롤러 진입 :: 화분시리얼 : {} :: 사용자 Seq : {}", registerPotRequest.getPotSerial(), userDto.getUserSeq());
        RegisterPotResponse registerPotResponse = potService.registerPot(registerPotRequest, userDto.getUserSeq());

        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("화분 등록에 성공했습니다.",registerPotResponse);
        responseFrame.setState(201);
        log.info("화분 등록에 완료 :: response : {}", responseFrame.toString());
        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    @ApiOperation(value = "화분 등록 해제")
    @RequestMapping(value = "/{potSeq}", method = RequestMethod.DELETE)
    public ResponseEntity<?> unregisterPot(@PathVariable("potSeq") String potSerial,@ApiIgnore @AuthenticationPrincipal UserDto principal) {
        // 나중에 실제 유저가 들어오면 삭제할 로직
        UserDto userDto = ((UserDto)principal);

        log.info("화분 등록 해제 컨트롤러 진입 :: 화분시리얼 : {} :: 사용자 Seq : {}", potSerial, userDto.getUserSeq());
        potService.unregisterPot(potSerial, userDto.getUserSeq());

        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("화분 등록에 성공했습니다.", null);
        responseFrame.setCode(202);
        log.info("화분 등록에 완료 :: response : {}", responseFrame.toString());
        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }
}
