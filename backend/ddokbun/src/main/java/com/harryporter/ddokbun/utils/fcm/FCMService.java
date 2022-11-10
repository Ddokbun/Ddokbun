package com.harryporter.ddokbun.utils.fcm;

import com.google.auth.oauth2.GoogleCredentials;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.*;

@Component
@Slf4j
public class FCMService {


    @Value("${fcm.project.id}")
    private String PROJECT_ID;

    private final String BASE_URL = "https://fcm.googleapis.com";
    @Value("${fcm.endpoint}")
    private String FCM_SEND_ENDPOINT;

    @Value("${fcm.message.scope}")
    private String SCOPES;

    @Value("${fcm.auth.file_path}")
    private String secretFilePath;

    private String getAccessToken() {

        try{


        GoogleCredentials googleCredentials = GoogleCredentials
                .fromStream(new ClassPathResource(secretFilePath).getInputStream())
                .createScoped(Arrays.asList(SCOPES));
        googleCredentials.refreshIfExpired();
        return googleCredentials.getAccessToken().getTokenValue();
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }

    }

    public boolean sendMessage(FCMMessageDto fcmMessageDto){

           Boolean result = WebClient.create(FCM_SEND_ENDPOINT)
                .post()
                .headers((headers)->{
                    headers.add(HttpHeaders.AUTHORIZATION,"Bearer "+getAccessToken());
                    headers.add(HttpHeaders.CONTENT_TYPE, "application/json; UTF-8");
                }).bodyValue(fcmMessageDto)
                .exchangeToMono(
                    clientResponse -> {
                        if (clientResponse.statusCode().is2xxSuccessful()) {

                          return Mono.just(true);
                        } else {

                            return Mono.just(false);
                        }
                    }
                ).block();

        return result.booleanValue();


    }


}
