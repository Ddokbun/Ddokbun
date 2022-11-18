package com.harryporter.ddokbun.domain.survey.service;

import com.harryporter.ddokbun.domain.survey.dto.request.SurveyAnswerRequest;
import com.harryporter.ddokbun.domain.survey.dto.response.SurveyAnswerResponse;
import com.harryporter.ddokbun.domain.survey.dto.response.SurveyResponse;

import java.util.List;

public interface SurveyService {

    List<SurveyResponse> getSurveys();
    List<SurveyAnswerResponse> surveyAnswerService(SurveyAnswerRequest surveyAnswerRequest);
}
