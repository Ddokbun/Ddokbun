package com.harryporter.ddokbun.api.response2;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ResponseType {
    SUCCESS(200, "success"),
    FAILURE(99, "Unexpected Error"),

    BAD_REQUEST(10000, "Bad request"),
    SPRING_BAD_REQUEST(10001,"Spring-detected bad request"),
    VALIDATION_ERROR(10002, "Validation error"),
    NOT_FOUND(10003, "Requested resource is not found"),
    DUPPLICATE_INPUT(10004,"Already exists resource, resource Duplicated"),

    INTERNAL_ERROR(20000,  "Internal error"),
    SPRING_INTERNAL_ERROR(20001,"Spring-detected internal error"),
    DATA_ACCESS_ERROR(20002,  "Data access error")
    ;

    private final Integer code;
    private final String message;
}
