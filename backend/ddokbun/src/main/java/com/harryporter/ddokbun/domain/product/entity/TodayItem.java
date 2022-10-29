package com.harryporter.ddokbun.domain.product.entity;

import javax.persistence.*;
import java.io.Serializable;

//오늘의 아이템을저장
@Entity
@Table(name="today_item")
public class TodayItem implements Serializable {

    @Id
    @JoinColumn(name = "item_seq")
    @OneToOne(fetch = FetchType.LAZY)
    private Item item;
}
