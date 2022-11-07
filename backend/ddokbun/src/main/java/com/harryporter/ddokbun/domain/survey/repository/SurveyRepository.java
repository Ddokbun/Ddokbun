package com.harryporter.ddokbun.domain.survey.repository;

import com.harryporter.ddokbun.domain.survey.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SurveyRepository extends JpaRepository<Survey,Integer> {

    @Query("SELECT distinct s FROM Survey s  JOIN FETCH s.surveySelectList")
    List<Survey> findAllWithAll();

}
