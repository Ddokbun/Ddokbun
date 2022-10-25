package com.harryporter.ddokbun.domain.user.dto;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * 유저의 기본속성 (참조제외)를 가진 간단한 UserDto
 */
@Getter
@Setter
public class UserSimpleDto implements Cloneable{
    private Long userSeq;
    private String userEmail;
    private String userNickname;
    private String userRole;
    private Date createdTime;
    private Date updatedTime;

    @Override
    protected Object clone() throws CloneNotSupportedException {
        UserSimpleDto temp = new UserSimpleDto();
        temp.setUserSeq(this.userSeq.longValue()); //참조 값임으로 프리미티브로 바꿔서 주소 다르게
        temp.setUserEmail(new String(this.userEmail));
        temp.setUserNickname(new String(this.userNickname));
        temp.setUserRole(new String(this.userRole));
        temp.setCreatedTime((Date)this.createdTime.clone());
        temp.setUpdatedTime((Date)this.updatedTime.clone());
        return super.clone();
    }
}
