package com.harryporter.ddokbun.utils.fcm;

import lombok.Getter;
import org.springframework.security.core.parameters.P;
import org.springframework.util.MultiValueMap;

import java.util.HashMap;
import java.util.LinkedHashMap;

@Getter
public class FCMMessageDto {

    private HashMap<String,Object> message;

    private FCMMessageDto(){
        message = new HashMap<>();
    }

    public static FCMMessageDtoBuilder builder(){
        return new FCMMessageDtoBuilder();
    }
    public static class FCMMessageDtoBuilder{


        private String token=null;
        private String body = null;
        private String title = null;

        private FCMMessageDtoBuilder(){}

        public FCMMessageDtoBuilder token(String token){
            this.token = token;
            return this;
        }

        public FCMMessageDtoBuilder body(String body){
            this.body = body; return this;
        }

        public FCMMessageDtoBuilder title(String title){
            this.title = title; return this;
        }
        public FCMMessageDto build(){
            if(token == null || body==null||title == null){
                return null;
            }

            HashMap<String,String> notification = new HashMap<>();
            notification.put("body",body);
            notification.put("title",title);


            FCMMessageDto temp = new FCMMessageDto();
            temp.message.put("token",token);
            temp.message.put("notification",notification);

            return temp;

        }


    }
}
