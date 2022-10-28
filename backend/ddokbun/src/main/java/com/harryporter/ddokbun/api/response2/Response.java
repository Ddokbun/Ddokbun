package com.harryporter.ddokbun.api.response2;

import com.harryporter.ddokbun.exception.ErrorCode;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Response {
    private String status;
    private int statusCode;
    private Result result;

    public static Response success(){
        return new Response("success", ErrorCode.OK.getCode(),null);
    }

    public static <T> Response success(T data){
        return new Response("success",ErrorCode.OK.getCode() ,new Success(data));
    }

    public static Response failure(int code, String msg) {
        return new Response("fail", code, new Failure(msg));
    }

}
