package com.harrypoter.ddokbun_consumer.env.data.entity;

import org.springframework.data.jpa.repository.Query;

import javax.persistence.*;

@Entity
@Table(name = "consumeLog")
public class ConsumeLog {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int consumeLogSeq;

    @Column(length = 500)
    private String content;

    public static ConsumeLog of(String content){
        ConsumeLog temp = new ConsumeLog();
        temp.content = content;
        return temp;
    }
}
