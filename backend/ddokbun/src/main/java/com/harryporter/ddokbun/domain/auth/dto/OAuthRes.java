package com.harryporter.ddokbun.domain.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class OAuthRes {
    private String jwtToken;
    private Long userSeq;
}
