package com.harryporter.ddokbun.utils.string.format;

public class DdokbunStringUtils {
    public static String ifStringNull(String target,String defaultValue){
        return target == null ? defaultValue : target;
    }
}
