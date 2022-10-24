package com.harryporter.ddokbun.domain.user.entity;

import javax.persistence.*;
import java.util.Date;

@Table(name="user")
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="user_seq")
    private Long userSeq;

    @Column(name="user_email", nullable = false, unique = true,columnDefinition = "varchar(100)")
    private String userEmail;

    @Column(name="user_nickname",nullable = false, unique = true,columnDefinition = "varchar(50)")
    private String userNickname;

    @Column(name="user_role",nullable = false,columnDefinition = "varchar(20)")
    private String userRole;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="user_created_at")
    private Date createdTime;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="user_updated_at")
    private Date updatedTime;
}