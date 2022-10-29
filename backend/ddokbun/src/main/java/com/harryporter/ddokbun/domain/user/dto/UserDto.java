package com.harryporter.ddokbun.domain.user.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.harryporter.ddokbun.domain.user.entity.User;
import lombok.*;

import java.util.Date;

@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private Long userSeq;
    private String userEmail;
    private String userNickname;
    private String userRole;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private Date createdTime;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private Date updatedTime;

    public static UserDto convert(User user) {
        if(user == null) return null;
            return UserDto.builder()
                    .userSeq(user.getUserSeq())
                    .userEmail(user.getUserEmail())
                    .userNickname(user.getUserNickname())
                    .userRole(user.getUserRole())
                    .createdTime(user.getCreatedTime())
                    .updatedTime(user.getUpdatedTime())
                    .build();
    }


}

