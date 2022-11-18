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
public class UserDto implements Cloneable {

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

    @Override
    protected Object clone() throws CloneNotSupportedException {
        UserDto temp = new UserDto();
        temp.setUserSeq(this.userSeq); //참조 값임으로 프리미티브로 바꿔서 주소 다르게
        temp.setUserEmail(new String(this.userEmail));
        temp.setUserNickname(new String(this.userNickname));
        temp.setUserRole(new String(this.userRole));
        temp.setCreatedTime(new Date());
        temp.setUpdatedTime(new Date());
        return super.clone();
    }


}

