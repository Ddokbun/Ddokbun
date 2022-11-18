package com.harryporter.ddokbun.config;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Configuration
public class QueryDslConfig {
    //쓰레드 세이프하지 않아 밑의 어노테이션을 사용해야함
    @PersistenceContext
    EntityManager em;

    @Bean
    public JPAQueryFactory jpaQueryFactory() {


        return new JPAQueryFactory(em);
    }
}
