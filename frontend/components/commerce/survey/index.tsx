import React, { Dispatch, SetStateAction, useState } from "react";
import { start } from "repl";
import Dot from "../../../common/Dot";
import { EleVar, WrapperVar } from "../../../styles/animations/animation";
import { FormWrapper, Wrapper } from "./styles";
import { motion } from "framer-motion";
import { ISurvey, ISurveyItem } from "../../../types/commerce/survey.interface";

const ServeyForm: React.FC<{
  survey: ISurveyItem;
  level: number;
  setLevel: Dispatch<SetStateAction<number>>;
}> = ({ survey, level, setLevel }) => {
  console.log(survey.surveySelectList[0]);

  const nextLevelHandler = () => {
    setLevel(val => val + 1);
  };
  const prevLevelHandler = () => {
    setLevel(val => val - 1);
  };
  return (
    <Wrapper>
      <div className="dots">
        <Dot now={level == 0 ? true : false} />
        <Dot now={level == 1 ? true : false} />
        <Dot now={level == 2 ? true : false} />
        <Dot now={level == 3 ? true : false} />
      </div>
      <FormWrapper variants={WrapperVar} initial="start" animate="end">
        <motion.h1 variants={EleVar}>{survey.survey.surveyContent}</motion.h1>

        <ul>
          {survey.surveySelectList.map((item, idx) => {
            return (
              <motion.li key={idx} variants={EleVar}>
                {item.surveySelectNumber}. {item.surveySelectContent}
              </motion.li>
            );
          })}
        </ul>
      </FormWrapper>

      <div className="button-wrap">
        <button className="button" onClick={prevLevelHandler}>
          이전
        </button>
        <button className="button" onClick={nextLevelHandler}>
          다음
        </button>
      </div>
    </Wrapper>
  );
};

export default ServeyForm;
