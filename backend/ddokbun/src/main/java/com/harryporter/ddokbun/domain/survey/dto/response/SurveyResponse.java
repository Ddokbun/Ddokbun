package com.harryporter.ddokbun.domain.survey.dto.response;

import com.harryporter.ddokbun.domain.survey.dto.SurveyDto;
import com.harryporter.ddokbun.domain.survey.dto.SurveySelectDto;
import com.harryporter.ddokbun.domain.survey.entity.Survey;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class SurveyResponse {

    private SurveyDto survey;

    private List<SurveySelectDto> surveySelectList;

    public static SurveyResponse of(Survey survey){
        SurveyResponse temp = new SurveyResponse();
        temp.survey = SurveyDto.of(survey);
        temp.surveySelectList = survey.getSurveySelectList().stream().map(
                surveySelect -> SurveySelectDto.of(surveySelect)
        ).collect(Collectors.toList());

        return temp;

    }
}
