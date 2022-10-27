package com.harryporter.ddokbun.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
public class SwaggerConfig {
    // http://localhost:8080/api/swagger-ui/index.html
    @Bean
    public Docket api() {
        return  new Docket(DocumentationType.OAS_30)
                .apiInfo(getApiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.harryporter.ddokbun.api"))
                .paths(PathSelectors.ant("/**"))
                .build();
    }

    private ApiInfo getApiInfo() {
        return new ApiInfoBuilder()
                .title("Ddokbun Swagger")
                .description("[Ddokbun] REST API")
                .version("1.0")
                .build();
    }
}