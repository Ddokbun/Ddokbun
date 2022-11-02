package com.harryporter.ddokbun.domain.survey.dto.request;

import lombok.Getter;

import java.util.List;

@Getter
public class SurveyAnswerRequest {

    private List<Integer> answerList;
}
