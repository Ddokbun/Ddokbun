package com.harryporter.ddokbun.domain.product.dto.response;

import lombok.Data;
import org.springframework.data.redis.core.ZSetOperations;

@Data
public class ClickRankDto {
    private long rankItemSeq;
    private String rankItemName;
    private double score;

    public static ClickRankDto convertToClickRankDto(ZSetOperations.TypedTuple<String> stringTypedTuple,String rankItemName) {
        ClickRankDto clickRankDto = new ClickRankDto();
        clickRankDto.rankItemSeq = Long.parseLong(stringTypedTuple.getValue());
        clickRankDto.score=stringTypedTuple.getScore();
        clickRankDto.rankItemName=rankItemName;
        return clickRankDto;

    }

    @Override
    public String toString() {
        return "ClickRankDto{" +
                "rankItemSeq='" + rankItemSeq + '\'' +
                ", score=" + score +
                ", rankItemName='" + rankItemName + '\'' +
                '}';
    }
}
