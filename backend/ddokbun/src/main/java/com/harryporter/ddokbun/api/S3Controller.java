package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.s3.dto.S3ObjectDto;
import com.harryporter.ddokbun.domain.s3.service.S3Service;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.OutputStream;

@Api(tags = "[이미지(Resource)]")
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/resources")
@Controller
public class S3Controller {

    private final S3Service s3Service;
    //관리자만 쓸 수 있게?#
    @ResponseBody
    @ApiOperation(value = "파일 등록")
    @PostMapping(value = "/s3/{path}/{fileName}",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<?> uploadFile(
            @PathVariable("path") String path,
            @PathVariable("fileName") String fileName,
            @RequestPart  MultipartFile file){

        String resourceUrl = s3Service.uploadFile(path,fileName,file);
        ResponseFrame res = ResponseFrame.ofOKResponse("정상적으로 파일이 등록되었습니다.",resourceUrl);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation("파일 펫치")
    @GetMapping("/s3")
    public void getResources(@RequestParam("uri") String uri, HttpServletResponse res){

        log.info("파일 가져오기 API 진입");
        S3ObjectDto s3od = s3Service.downloadFileV1(uri);
        log.info("S3 로 부터 스트림 획득");
        BufferedInputStream bis = new BufferedInputStream(s3od.getInputStream());

        byte[] bytes = new byte[1024]; //버퍼
        int length; //버퍼용
        int size = 0; //길이 측정

        res.setContentType(s3od.getContentType());
        try(OutputStream os =  res.getOutputStream()) {
            while( (length = bis.read(bytes)) >= 0){
                size +=length;
                os.write(bytes);
            }
            os.flush();
        } catch (IOException e) {
            log.info("스트림 전송 중 에러");
            e.printStackTrace();
        }finally {

            try {
                bis.close();
                s3od.close();
            } catch (Exception e) {
                e.printStackTrace();
            }

            log.info("성공적 스트림 반환 :: 길이 : {}",size);
        }


    }
}
