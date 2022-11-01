package com.harryporter.ddokbun.domain.s3.service;

import com.harryporter.ddokbun.domain.s3.dto.S3ObjectDto;
import org.springframework.web.multipart.MultipartFile;

public interface S3Service {
     String uploadFile(String path, String fileName, MultipartFile mf);
     S3ObjectDto downloadFileV1(String resourcePath);

     S3ObjectDto downloadFileV2(long plantSeq);
}
