package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.plant.repository.dto.request.RegisterPotRequest;
import com.harryporter.ddokbun.domain.plant.repository.dto.response.PlantInfoAllReponse;
import com.harryporter.ddokbun.domain.plant.repository.dto.response.RegisterPotResponse;
import com.harryporter.ddokbun.domain.plant.repository.dto.response.SearchPlantInfoResponse;
import com.harryporter.ddokbun.domain.plant.service.PlantService;
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

import java.util.List;

@RequestMapping("/pot")
@RestController
@RequiredArgsConstructor
@Api(tags = "화분 CRUD API")
@Slf4j
public class PotController {
    private final PotService potService;
    private final PlantService plantService;

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
        log.info("검색한 식물 정보 받기 컨트롤러 진입 :: 식물시리얼 : {}", plantSeq);
        SearchPlantInfoResponse searchPlantInfoResponse = plantService.searchPlantInfo(plantSeq);
        log.info("식물 정보 받기 성공 :: 식물정보 {}", searchPlantInfoResponse);

        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("식물 정보를 받는데 성공했씁니다.", searchPlantInfoResponse);
        responseFrame.setCode(200);

        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }
}
