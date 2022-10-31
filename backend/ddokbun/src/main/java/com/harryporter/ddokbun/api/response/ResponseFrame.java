package com.harryporter.ddokbun.api.response;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class ResponseFrame<T> {

    int state; //응답의 상태
    int code; //http 요청의 상태
    String message; //응답을 설명할 메세지
    T content; //실어서 보낼 값

    public static <T> ResponseFrame<T> ofOKResponse(String message,T content){
        ResponseFrame<T> temp = new ResponseFrame<>();
        temp.setCode(200);
        temp.setState(1);
        temp.setMessage(message);
        temp.setContent(content);
        return temp;
    }

}
