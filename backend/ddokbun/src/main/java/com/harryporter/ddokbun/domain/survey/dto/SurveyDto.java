package com.harryporter.ddokbun.domain.survey.dto;

import com.harryporter.ddokbun.domain.survey.entity.Survey;
import lombok.Getter;

@Getter
public class SurveyDto {

    private int surveySeq;

    private String surveyContent;


    public static SurveyDto of(Survey survey){
        SurveyDto temp = new SurveyDto();

        temp.surveySeq = survey.getSurveySeq();

        temp.surveyContent = survey.getSurveyContent();

        return temp;
    }

}
