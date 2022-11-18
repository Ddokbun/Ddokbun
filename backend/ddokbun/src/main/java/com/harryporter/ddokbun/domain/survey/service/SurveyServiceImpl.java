package com.harryporter.ddokbun.domain.survey.service;

import com.harryporter.ddokbun.domain.survey.dto.request.SurveyAnswerRequest;
import com.harryporter.ddokbun.domain.survey.dto.response.SurveyAnswerResponse;
import com.harryporter.ddokbun.domain.survey.dto.response.SurveyResponse;
import com.harryporter.ddokbun.domain.survey.entity.Survey;
import com.harryporter.ddokbun.domain.survey.repository.SurveyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class SurveyServiceImpl implements SurveyService{

    private final SurveyRepository surveyRepository;

    @Override
    public List<SurveyResponse> getSurveys() {

        List<Survey> surveys =  surveyRepository.findAllWithAll();

       List<SurveyResponse> surveyResponseList =  surveys.stream().map(
                survey -> SurveyResponse.of(survey)
        ).collect(Collectors.toList());

        return surveyResponseList;
    }
    @Override
    public List<SurveyAnswerResponse> surveyAnswerService(SurveyAnswerRequest surveyAnswerRequest) {

        List<SurveyAnswerResponse> response = surveyRepository.findSurveyResult(surveyAnswerRequest).stream().map(
                hello ->  SurveyAnswerResponse.of(hello)
        ).collect(Collectors.toList());
        return response;
    }
}
