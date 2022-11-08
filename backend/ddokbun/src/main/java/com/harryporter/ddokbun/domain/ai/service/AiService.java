package com.harryporter.ddokbun.domain.ai.service;

import com.harryporter.ddokbun.domain.ai.dto.response.PictureResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

@Service
@Slf4j
@RequiredArgsConstructor
public class AiService {

    public PictureResponse findPlant(MultipartFile mf){
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.postForObject("https://ddokbun.com/fast-api/findPlant", mf, String.class);
        PictureResponse pictureResponse = PictureResponse.setPictureResponse(response);
        return pictureResponse;

    }
}
