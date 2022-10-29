package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response2.Response;
import com.harryporter.ddokbun.domain.user.service.UserService;
import com.harryporter.ddokbun.utils.auth.JwtTokenUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RequestMapping("/user")
@RestController
public class UserController {
    private final JwtTokenUtils jwtTokenProvider;
    private final UserService userService;

    @GetMapping
    public Response getUserInfo(){
      //  Long userSeq=jwtTokenProvider.getUserSeq(request);
        return Response.success("Success");
    }
}
