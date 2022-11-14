package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.ai.dto.response.PictureResponse;
import com.harryporter.ddokbun.domain.ai.service.AiService;
import com.harryporter.ddokbun.exception.GeneralException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
        ResponseFrame res = null;
        log.info("파일이름{}", StringUtils.cleanPath(file.getOriginalFilename()));
        try{
            log.info("컨트롤러 접근 2");
            Object response = aiService.findPlant(file);
            res = ResponseFrame.ofOKResponse("정상적으로 식물 이름이 출력됬습니다.",response);
        }catch (IOException e){
            throw  new GeneralException("정상적으로 식물을 찾지 못했습니다.");
        }

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}
