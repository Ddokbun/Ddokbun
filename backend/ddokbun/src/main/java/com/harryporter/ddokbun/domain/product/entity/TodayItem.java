package com.harryporter.ddokbun.domain.product.entity;

import lombok.Getter;

import javax.persistence.*;
import java.io.Serializable;

//오늘의 아이템을저장
@Entity
@Getter
@Table(name="today_item")
public class TodayItem implements Serializable {

    @Id
    @JoinColumn(name = "item_seq")
    @OneToOne(fetch = FetchType.LAZY)
    private Item item;
}
