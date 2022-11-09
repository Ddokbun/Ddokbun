package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.ai.dto.response.PictureResponse;
import com.harryporter.ddokbun.domain.ai.service.AiService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Api(tags = "AI Controller")
@Slf4j
@RequestMapping("/AI")
@RestController
@RequiredArgsConstructor
public class AIController {
    private static AiService aiService;

    @ResponseBody
    @ApiOperation(value = "사진 받아 식물 이름과 Seq 반환")
    @PostMapping(value = "/picture",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<?> findPlantKind(
            @RequestPart MultipartFile file){
        log.info("식물 사진 AI에 접근했습니다.");
        PictureResponse response = aiService.findPlant(file);
        ResponseFrame res = ResponseFrame.ofOKResponse("정상적으로 식물 이름이 출력됬습니다.",response);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}
