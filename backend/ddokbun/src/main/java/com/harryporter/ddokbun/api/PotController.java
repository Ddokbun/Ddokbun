package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.plant.dto.response.*;
import com.harryporter.ddokbun.domain.plant.dto.request.RegisterPotRequest;
import com.harryporter.ddokbun.domain.plant.entity.PotLog;
import com.harryporter.ddokbun.domain.plant.service.PlantService;
import com.harryporter.ddokbun.domain.plant.service.PotLogService;
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

import javax.websocket.server.PathParam;
import java.time.LocalDate;
import java.util.List;

@RequestMapping("/pot")
@RestController
@RequiredArgsConstructor
@Api(tags = "pot-controller")
@Slf4j
public class PotController {
    private final PotService potService;
    private final PlantService plantService;

    private final PotLogService potLogService;

    // 생산직후 화분 등록
    @ApiOperation(value = "생산직후 화분 시리얼 정보만 기입")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> producePot(@RequestBody String potSerial){
        log.info("화분 등록 컨트롤러 진입 :: 화분 시리얼 : {}", potSerial);
        potService.producePot(potSerial);
        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("화분 등록에 성공했습니다.", null);
        responseFrame.setState(201);
        log.info("화분 등록에 완료 ");
        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    //화분 정보수정
    // 유저가 자신의 화분을 등록한다.
    @ApiOperation(value = "화분 등록")
    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> registerPot(@RequestBody RegisterPotRequest registerPotRequest,@ApiIgnore @AuthenticationPrincipal UserDto principal) {
        UserDto userDto = principal;

        log.info("화분 등록 컨트롤러 진입 :: 화분시리얼 : {} :: 사용자 Seq : {}", registerPotRequest.getPotSerial(), principal.getUserSeq());
        RegisterPotResponse registerPotResponse = potService.registerPot(registerPotRequest, userDto.getUserSeq());

        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("화분 등록에 성공했습니다.",registerPotResponse);
        responseFrame.setState(201);
        log.info("화분 등록에 완료 :: response : {}", responseFrame.toString());
        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    @ApiOperation(value = "화분 등록 해제")
    @RequestMapping(value = "/{potSeq}", method = RequestMethod.DELETE)
    public ResponseEntity<?> unregisterPot(@PathVariable("potSeq") String potSerial,@ApiIgnore @AuthenticationPrincipal UserDto principal) {
        UserDto userDto = principal;

        log.info("화분 등록 해제 컨트롤러 진입 :: 화분시리얼 : {} :: 사용자 Seq : {}", potSerial, userDto.getUserSeq());
        potService.unregisterPot(potSerial, userDto.getUserSeq());

        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("화분 등록 해제에 성공했습니다.", null);
        responseFrame.setCode(202);
        log.info("화분 등록에 완료 :: response : {}", responseFrame.toString());
        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    @ApiOperation(value = "전체 식물 정보 받기")
    @RequestMapping(value = "/plant-info", method = RequestMethod.GET)
    public ResponseEntity<?> plantInfo() {
        log.info("전체 식물 정보 받기 컨트롤러 진입");
        List<PlantInfoAllReponse> plantInfoList =  plantService.getPlantInfo();
        log.info("전체 식물 정보 받기 성공");

        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("화분 정보를 받는데 성공했습니다.", plantInfoList);
        responseFrame.setCode(200);
        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    @ApiOperation(value = "검색한 식물의 정보 받기")
    @RequestMapping(value = "/{plantSeq}/plant-info", method = RequestMethod.GET)
    public ResponseEntity<?> potPlantInfo(@PathVariable("plantSeq") Long plantSeq) {
        log.info("검색한 식물 정보 받기 컨트롤러 진입 :: 식물번호 : {}", plantSeq);
        SearchPlantInfoResponse searchPlantInfoResponse = plantService.searchPlantInfo(plantSeq);
        log.info("식물 정보 받기 성공 :: 식물정보 {}", searchPlantInfoResponse);

        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("식물 정보를 받는데 성공했습니다.", searchPlantInfoResponse);
        responseFrame.setCode(200);

        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    @ApiOperation(value = "수동 물주기")
    @RequestMapping(value = "/{potSeq}/water", method = RequestMethod.POST)
    public ResponseEntity<?> potWaterApply(@PathVariable("potSeq") String potSeq, @ApiIgnore @AuthenticationPrincipal UserDto principal) {
        log.info("화분 수동 물주기 컨트롤러 진입 :: 화분시리얼 {}", potSeq);
        potService.applyWater(potSeq, principal.getUserSeq());

        log.info("화분 수동 물주기 완료 :: 물준 일자 : {}", LocalDate.now());
        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("화분에 물을 주는데 성공했습니다.", null);

        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    @ApiOperation(value = "수동, 자동 물주기 변경")
    @RequestMapping(value = "/{potSeq}/water", method = RequestMethod.PUT)
    public ResponseEntity<?> changeWaterApplyMethod(@PathVariable("potSeq") String potSeq, @ApiIgnore @AuthenticationPrincipal UserDto principal){
        log.info("화분 수동 물주기 컨트롤러 진입 :: 화분시리얼 {}", potSeq);
        potService.changeWaterApplyMethod(potSeq, principal.getUserSeq());

        log.info("화분 물 공급 방법 변경 성공");
        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("화분 물 공급 방법 변경에 성공했습니다.", null);

        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    @ApiOperation(value = "사용자에게 귀속된 화분리스트 조회")
    @RequestMapping(value = "/my-pot", method = RequestMethod.GET)
    public ResponseEntity<?> myPot(@ApiIgnore @AuthenticationPrincipal UserDto principal) {
        log.info("사용자 화분 리스트 검색 컨트롤러 진입");
        List<MyPotReponse> pots = potService.myPot(principal.getUserSeq());
        log.info("사용자 확분 리스트를 반환 받았습니다.");
        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("사용자에게 귀속된 화분리스트 조회에 성공했습니다.", pots);

        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    @ApiOperation(value = "사용자 화분 세부정보 확인")
    @RequestMapping(value = "/{potSeq}", method = RequestMethod.GET)
    public ResponseEntity<?> potDetail(@PathVariable("potSeq") String potSeq, @ApiIgnore @AuthenticationPrincipal UserDto principal) {
        log.info("화분 디테일 컨트롤러 진입");
        PotDetailResponse potDetailResponse = potService.potDetail(potSeq, principal.getUserSeq());
        log.info("화분 디테일을 반환 받았습니다.");
        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("화분 디테일 조회에 성공했습니다.",potDetailResponse);
        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
   }

    @ApiOperation(value = "화분 물준 로그 확인")
    @RequestMapping(value = "/{potSeq}/water", method = RequestMethod.GET)
    public ResponseEntity<?> waterLog(@PathVariable("potSeq") String potSeq, @RequestParam("year") Integer year, @RequestParam("month") Integer month, @ApiIgnore @AuthenticationPrincipal UserDto principal) {
        log.info("화분 물준 로그 확인 컨트롤러 진입");
        List<LocalDate> waterList = potService.waterApplies(potSeq, year, month, principal.getUserSeq());
        log.info("화분 물준 로그를 받아오는데 성공했습니다.");
        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("화분 물 준 로그를 확인하는데 성공했습니다.", waterList);
        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    @ApiOperation(value = "로그값 넣기")
    @RequestMapping(value = "/{potSeq}/potLog", method = RequestMethod.POST)
    public ResponseEntity<?> addLog(@PathVariable("potSeq") String potSeq){
        log.info("화분 물준 로그 확인 컨트롤러 진입");
        Long potLog = potLogService.addLog(potSeq);
        log.info("화분 물준 로그를 받아오는데 성공했습니다.");
        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("화분 물 준 로그를 확인하는데 성공했습니다.", potLog);
        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    @ApiOperation(value = "화분 온도 로그 확인")
    @RequestMapping(value = "/{potSeq}/temperature", method = RequestMethod.GET)
    public ResponseEntity<?> temperatureLog(@PathVariable("potSeq") String potSeq, @ApiIgnore @AuthenticationPrincipal UserDto principal){
        log.info("화분 온도 로그 확인 컨트롤러 진입");
        List<PotTemperatureLogResponse> potLogList =  potLogService.potTemperatureLogService(potSeq, principal.getUserSeq());
        log.info("화분 온도 로그를 받아오는데 성공했습니다.");
        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("화분 온도 로그를 받아오는데 성공했습니다.", potLogList);
        return  new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    @ApiOperation(value = "화분 광량 로그 확인")
    @RequestMapping(value = "/{potSeq}/light", method = RequestMethod.GET)
    public ResponseEntity<?> lightLog(@PathVariable("potSeq") String potSeq, @ApiIgnore @AuthenticationPrincipal UserDto principal){
        log.info("화분 광량 로그 확인 컨트롤러 진입");
        List<PotLightLogResponse> potLogList =  potLogService.potLightLogService(potSeq, principal.getUserSeq());
        log.info("화분 광량 로그를 받아오는데 성공했습니다.");
        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("화분 광량 로그를 받아오는데 성공했습니다.", potLogList);
        return  new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    @ApiOperation(value = "화분 습도 로그 확인")
    @RequestMapping(value = "/{potSeq}/humid", method = RequestMethod.GET)
    public ResponseEntity<?> humidLog(@PathVariable("potSeq") String potSeq, @ApiIgnore @AuthenticationPrincipal UserDto principal){
        log.info("화분 습도 로그 확인 컨트롤러 진입");
        List<PotHumidLogResponse> potLogList =  potLogService.potHumidLogService(potSeq, principal.getUserSeq());
        log.info("화분 습도 로그를 받아오는데 성공했습니다.");
        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("화분 광량 로그를 받아오는데 성공했습니다.", potLogList);
        return  new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }


}

