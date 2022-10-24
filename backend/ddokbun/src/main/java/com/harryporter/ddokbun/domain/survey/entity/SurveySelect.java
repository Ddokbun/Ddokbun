package com.harryporter.ddokbun.domain.survey.entity;

import javax.persistence.*;

@Table(name="survey_select")
@Entity
public class SurveySelect {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer surveySelectSeq;

    @JoinColumn(name = "survey_seq",nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private Survey survey;

    @Column(name = "survey_select_content",columnDefinition = "VARCHAR(100)")
    private String surveySelectContent;

    //문항 번호
    @Column(nullable = false,name = "survey_select_number")
    private Integer surveySelectNumber;


}
