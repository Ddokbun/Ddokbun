package com.harryporter.ddokbun.domain.product.entity;

import com.harryporter.ddokbun.domain.plant.entity.Plant;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Table(name = "item")
@Entity
@Getter
@Setter
public class Item {

    //상품 일련 번호
    @Id
    @Column(name="item_seq",columnDefinition = "INTEGER UNSIGNED")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long itemSeq;

    //상품명
    @Column(name="item_name",columnDefinition = "VARCHAR(30) NOT NULL")
    private String itemName;

    //가격
    @Column
    private Integer itemPrice;

    //설명
    @Column(nullable = false,columnDefinition = "TEXT")
    private String itemInfo;

    //재고
    @Column(nullable = false)
    private  Integer itemStock;

    //사진
    @Column(columnDefinition = "VARCHAR(255)",nullable = false)
    private String itemPicture;

    //1이면 식물
    //2이면 화분 등등의 상품들
    @Column(nullable = true)
    private Integer itemKind;

    //plantSeq 참조로 할지 , 키 값만 저장할지?
    @JoinColumn(name = "plant_seq",nullable = true)
    @OneToOne(fetch = FetchType.LAZY)
    private Plant plant;
}
