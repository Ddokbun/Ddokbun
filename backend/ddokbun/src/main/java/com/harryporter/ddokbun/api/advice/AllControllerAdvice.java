package com.harryporter.ddokbun.api.advice;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.exception.GeneralException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class AllControllerAdvice {


    @ExceptionHandler(value = GeneralException.class)
    public ResponseEntity<?> genericExceptionHadler(GeneralException ge){

        ResponseFrame<Throwable> responseFrame = new ResponseFrame<>();

        responseFrame.setMessage(ge.getMessage()); //메세지
        responseFrame.setState(0); //심플 성공 실패 상태
        responseFrame.setCode(ge.getErrorCode().getCode()); //우리가 지정한 코드
        responseFrame.setContent(ge.getCause());

        return new ResponseEntity<>(responseFrame,ge.getErrorCode().getHttpStatus());
    }
}
