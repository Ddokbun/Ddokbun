package com.harryporter.ddokbun.domain.product.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

//오늘의 아이템을저장
@Entity
public class TodayItem {

    @JoinColumn(name = "item_seq")
    @OneToOne(fetch = FetchType.LAZY)
    private Item item;
}
