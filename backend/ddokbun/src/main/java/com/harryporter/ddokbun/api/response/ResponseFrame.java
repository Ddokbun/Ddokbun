package com.harryporter.ddokbun.api.response;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ResponseFrame<T> {
    String message;
    int state;
    T content;
}
