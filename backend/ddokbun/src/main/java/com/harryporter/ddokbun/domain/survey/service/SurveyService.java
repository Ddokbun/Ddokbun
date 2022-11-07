package com.harryporter.ddokbun.domain.survey.service;

import com.harryporter.ddokbun.domain.survey.dto.response.SurveyResponse;

import java.util.List;

public interface SurveyService {

    List<SurveyResponse> getSurveys();
}
