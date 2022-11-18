package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.ai.dto.response.ResultResponse;
import com.harryporter.ddokbun.domain.ai.service.AiService;
import com.harryporter.ddokbun.exception.GeneralException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Api(tags = "AI Controller")
@Slf4j
@RequestMapping("/AI")
@RestController
@RequiredArgsConstructor
public class AIController {
    private final AiService aiService;

    @ResponseBody
    @ApiOperation(value = "사진 받아 식물 이름과 Seq 반환")
    @PostMapping(value = "/picture")
    public ResponseEntity<?> findPlantKind(
            @RequestPart MultipartFile file){
        log.info("식물 사진 AI에 접근했습니다.");
        ResponseFrame<?> res = null;
        log.info("파일이름{}", StringUtils.cleanPath(file.getOriginalFilename()));
        try{
            log.info("컨트롤러 접근 2");
            Object response = aiService.findPlant(file);
            res = ResponseFrame.ofOKResponse("정상적으로 식물 이름이 출력됬습니다.",response);
        }catch (IOException e){
            throw  new GeneralException("정상적으로 식물을 찾지 못했습니다.");
        }
        log.info("보내기 완료");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    // 클러스터 연결할 부분
    @ApiOperation(value = "화분 데이터를 바탕으로 식물추천")
    @GetMapping(value = "/find-plant/{PotSeq}")
    public ResponseEntity<?> findPlantByPot(@PathVariable("PotSeq") String PotSeq) {
        log.info("화분 추천 AI 컨트롤러에 접근했습니다.");
        ResultResponse response = aiService.getRecPlant(PotSeq);

        ResponseFrame<?> result = ResponseFrame.ofOKResponse("정삭적으로 식물이 출력됬습니다.", response);

        log.info("보내기 완료");
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
