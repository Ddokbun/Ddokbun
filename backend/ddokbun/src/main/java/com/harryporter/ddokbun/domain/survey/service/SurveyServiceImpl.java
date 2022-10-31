package com.harryporter.ddokbun.domain.survey.service;

import com.harryporter.ddokbun.domain.survey.dto.response.SurveyResponse;
import com.harryporter.ddokbun.domain.survey.entity.Survey;
import com.harryporter.ddokbun.domain.survey.repository.SurveyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
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
}
