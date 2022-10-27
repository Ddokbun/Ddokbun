package com.harryporter.ddokbun.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/user")
@RestController
public class UserController {

    //유저가 서비스 이용을 위해 로그인한다.
    @RequestMapping(name = "",method = RequestMethod.POST)
    public ResponseEntity<?> signUp(){
        //미구현

        return null;
    }




}
