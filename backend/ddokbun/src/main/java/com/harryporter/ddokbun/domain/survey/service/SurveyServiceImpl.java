package com.harryporter.ddokbun.domain.survey.service;

import com.harryporter.ddokbun.domain.survey.repository.SurveyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class SurveyServiceImpl implements SurveyService{

    private final SurveyRepository surveyRepository;

}
