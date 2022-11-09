package com.harryporter.ddokbun.domain.ai.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.harryporter.ddokbun.domain.ai.dto.response.PictureResponse;
import com.harryporter.ddokbun.domain.ai.dto.response.PictureresultResponse;
import com.harryporter.ddokbun.domain.auth.dto.KakaoAccessToken;
import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.plant.repository.PlantRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.common.utils.Bytes;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.*;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
@Slf4j
@RequiredArgsConstructor
public class AiService {
    private final PlantRepository plantRepository;
    public Object findPlant(MultipartFile mf) throws IOException {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        MultiValueMap<String, Object> body = new LinkedMultiValueMap<String, Object>();
        if (!mf.isEmpty()) {
            body.add("file", mf.getResource());
        }

        HttpEntity<MultiValueMap<String, Object>> entity = new HttpEntity<MultiValueMap<String, Object>>(body,headers);

//        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
//        factory.setBufferRequestBody(false);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange("https://ddokbun.com/fast-api/findPlant", HttpMethod.POST, entity, String.class);
        String responseBody = response.getBody(); //"{"result" : result}"
        ObjectMapper objectMapper = new ObjectMapper();
        PictureResponse result = objectMapper.readValue(responseBody, PictureResponse.class);
        if (result.getPlantName() != null) {
            Plant plant = plantRepository.findByPlantName(result.getPlantName());
            PictureresultResponse pictureresultResponse = PictureresultResponse.setPictureResultResponse(plant);
            return pictureresultResponse;
        } else {
            return PictureresultResponse.setNullPictureResultResponse();
        }

    }
}
