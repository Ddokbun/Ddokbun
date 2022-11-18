package com.harryporter.ddokbun.api;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/infra")
@RequiredArgsConstructor
@RestController
@Api(tags ={"배포 설정 API"})
public class InfraController {
    private final Environment env;

    @GetMapping("/health")
    public String health() {
        return "UP";
    }

    @GetMapping("/port")
    public String port() {
        return env.getProperty("local.server.port");
    }
}
