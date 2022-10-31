package com.harryporter.ddokbun.domain.s3.dto;

import com.amazonaws.services.s3.model.S3Object;
import lombok.Getter;

import java.io.InputStream;

/**
 * 사용시 반드시 inputStream을 닫아주세요.
 */
@Getter
public class S3ObjectDto implements AutoCloseable {
    private String contentType;
    private InputStream inputStream;

    public static S3ObjectDto of(S3Object s3o){
        S3ObjectDto temp = new S3ObjectDto();
        temp.contentType = s3o.getObjectMetadata().getContentType();
        temp.inputStream = s3o.getObjectContent();
        return temp;
    }

    @Override
    public void close() throws Exception {
        inputStream.close();
    }
}
