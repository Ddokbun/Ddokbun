package com.harryporter.ddokbun.api.response2;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 코드의 다형성 보장 & 코드 변형 최소한으로 보장
 */
@Getter
@AllArgsConstructor
public class Success<T> implements Result {
    private T data;
}
