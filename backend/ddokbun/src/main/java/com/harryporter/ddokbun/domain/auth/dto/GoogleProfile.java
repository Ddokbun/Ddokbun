package com.harryporter.ddokbun.domain.auth.dto;

import lombok.*;

@Data
@NoArgsConstructor
public class GoogleProfile {
    public String azp;
    public String aud;
    public String sub;
    public String scope;
    public String exp;
    public String expires_in;
    public String email;
    public String email_verified;
    public String access_type;
}