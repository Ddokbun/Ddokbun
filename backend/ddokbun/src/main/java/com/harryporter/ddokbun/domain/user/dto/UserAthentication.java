package com.harryporter.ddokbun.domain.user.dto;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;
import java.util.List;


public class UserAthentication extends UserDto implements Authentication {

    private boolean isAthenticated;
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

      return List.of( new SimpleGrantedAuthority(this.getUserRole()));
    }

    @Override
    public Object getCredentials() {
        return null;
    }

    @Override
    public Object getDetails() {
        return this.getUserSeq();
    }

    @Override
    public Object getPrincipal() {
        try {
            return this.clone();
        } catch (CloneNotSupportedException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public boolean isAuthenticated() {
        return isAthenticated;
    }

    @Override
    public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {
        this.isAthenticated = isAuthenticated;
    }

    @Override
    public String getName() {
        return this.getUserNickname();
    }
}
