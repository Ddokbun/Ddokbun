package com.harryporter.ddokbun.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class LieInterceptor implements WebMvcConfigurer {

    @Autowired
    LieUserBeforeAthenticationInterceptor  lieUserBeforeAthenticationInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(lieUserBeforeAthenticationInterceptor).addPathPatterns("/**");
    }
}



