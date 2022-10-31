package com.harryporter.ddokbun.domain.s3.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.S3Object;
import com.harryporter.ddokbun.domain.s3.dto.S3ObjectDto;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

@Service
@Slf4j
@RequiredArgsConstructor
public class S3ServiceV1 implements S3Service{
    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucketName;

    @Override
    public String uploadFile(String path, String fileName, MultipartFile mf){
        if(path == null){
            path = "";
        }
        if(fileName == null || mf == null || mf.getSize() == 0){
            throw new GeneralException(ErrorCode.VALIDATION_ERROR,"파일을 업로드 하기 위해서는 파일이름과 컨텐츠가 있어야합니다.");
        }



        log.info("S3 파일 업로드 :: path : ");
        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentType(mf.getContentType());

        try(InputStream is = mf.getInputStream() ){

            amazonS3Client.putObject(bucketName,path+ "/" +fileName,is,objectMetadata);
        }catch (IOException ie){
            log.error(ie.getMessage());
            throw new GeneralException(ErrorCode.EXTERNAL_SERVICE_ACCESS_ERROR);
        }

        //접근 URL 보내주기는 하는데 S3 설정 떄 해봤자 못오게 막아놈
        String temp =  amazonS3Client.getUrl(bucketName,path+ "/" +fileName).toString();
        log.info(temp);
        return temp;
    }
    @Override
    public S3ObjectDto downloadFileV1(String resourcePath) {
        if(Strings.isEmpty(resourcePath)){
            throw new GeneralException(ErrorCode.VALIDATION_ERROR,"파일 컨텐츠를 가지고 오기 위해서는 리소스 경로가 있어야합니다.");
        }

        if(!amazonS3Client.doesObjectExist(bucketName,resourcePath)){
            throw new GeneralException(ErrorCode.EXTERNAL_SERVICE_ACCESS_ERROR,"해당하는 파일을 찾을 수 없습니다. :: resourcePath : "+resourcePath);
        }

        S3Object s3Object = amazonS3Client.getObject(bucketName, resourcePath);
       // S3ObjectInputStream inputStream = s3Object.getObjectContent();


       return S3ObjectDto.of(s3Object);
    }


}
