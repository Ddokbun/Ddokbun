package com.harryporter.ddokbun.api.advice;


import com.harryporter.ddokbun.api.response2.Response;
import com.harryporter.ddokbun.api.response2.ResponseType;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@RestControllerAdvice
public class ExceptionAdvice {

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public Response methodArgumentTypeMismatchException() {
        return Response.failure(ResponseType.BAD_REQUEST.getCode(),ResponseType.BAD_REQUEST.getMessage());
    }

}
