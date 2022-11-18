package com.harryporter.ddokbun.domain.survey.dto;

import com.harryporter.ddokbun.domain.survey.entity.SurveySelect;
import lombok.Getter;

@Getter
public class SurveySelectDto {

    private int surveySelectSeq;

    private String surveySelectContent;

    private int surveySelectNumber;


    public static SurveySelectDto of(SurveySelect surveySelect){
        SurveySelectDto temp = new SurveySelectDto();

        temp.surveySelectSeq = surveySelect.getSurveySelectSeq();
        temp.surveySelectContent = surveySelect.getSurveySelectContent();
        temp.surveySelectNumber = surveySelect.getSurveySelectNumber();

        return temp;
    }
}
