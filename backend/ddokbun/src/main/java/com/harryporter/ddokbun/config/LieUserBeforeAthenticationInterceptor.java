package com.harryporter.ddokbun.config;

import com.harryporter.ddokbun.domain.user.dto.UserAthentication;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.ParseException;
import java.text.SimpleDateFormat;

//@Component
@Slf4j
@RequiredArgsConstructor
@Component
public class LieUserBeforeAthenticationInterceptor implements HandlerInterceptor {

   private final AuthenticationManager authenticationManager;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        log.warn("해당 소스는 개발을 위한 소스가 포함되어있습니다. 실제 서비스 운영 전, auth로직이 구현되면 삭제해주세요");
        UserAthentication lieUser = new UserAthentication();

        lieUser.setAuthenticated(true);
        lieUser.setUserEmail("test@test.com");
        lieUser.setUserNickname("테스트님");
        lieUser.setUserRole("ROLE_USER");
        lieUser.setUserSeq(0L);
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy년 MM월 dd일 HH시 mm분 ss초");

        try {
            lieUser.setCreatedTime(formatter.parse("2021년 06월 19일 21시 05분 07초"));

            lieUser.setUpdatedTime(formatter.parse("2022년 06월 19일 22시 05분 07초"));
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }

       //Authentication authentication = authenticationManager.authenticate(lieUser);
       SecurityContextHolder.getContext().setAuthentication(lieUser);

        return HandlerInterceptor.super.preHandle(request, response, handler);
    }
}
