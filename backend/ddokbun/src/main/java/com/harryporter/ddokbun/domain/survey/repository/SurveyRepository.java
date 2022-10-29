package com.harryporter.ddokbun.domain.survey.repository;

import com.harryporter.ddokbun.domain.survey.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SurveyRepository extends JpaRepository<Survey,Integer> {
}
