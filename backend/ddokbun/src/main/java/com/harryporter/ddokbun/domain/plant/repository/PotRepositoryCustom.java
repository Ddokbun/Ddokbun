package com.harryporter.ddokbun.domain.plant.repository;


import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class PotRepositoryCustom  {

    private final JPAQueryFactory jpaQueryFactory;
}
