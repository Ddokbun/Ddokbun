import React, { Dispatch, SetStateAction, useState } from "react";
import { start } from "repl";
import Dot from "../../../common/Dot";
import {
  EleVar,
  WrapperVar,
  SvgAni,
} from "../../../styles/animations/animation";
import { FormWrapper, Svg } from "./styles";
import { motion } from "framer-motion";
import { ISurvey, ISurveyItem } from "../../../types/commerce/survey.interface";
import Check from "../../../assets/icon/check.svg";

const ServeyForm: React.FC<{
  survey: ISurveyItem;
  level: number;
  answer: number[];
  setLevel: Dispatch<SetStateAction<number>>;
  setAnswerHandler: (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => void;
}> = ({ survey, level, setLevel, setAnswerHandler, answer }) => {
  console.log(survey.surveySelectList[0]);

  const nextLevelHandler = () => {
    setLevel(val => val + 1);
  };
  const prevLevelHandler = () => {
    setLevel(val => val - 1);
  };
  return (
    <FormWrapper variants={WrapperVar} initial="start" animate="end">
      <motion.h1 variants={EleVar}>
        {" "}
        Q{level + 1}. {survey.survey.surveyContent}
      </motion.h1>

      <ul>
        {survey.surveySelectList.map((item, idx) => {
          return (
            <motion.li
              id={String(idx + 1)}
              key={idx}
              variants={EleVar}
              onClick={setAnswerHandler}
            >
              {answer[level] == idx + 1 ? (
                <Svg viewBox="0 0 80 40">
                  <polyline
                    className="st1"
                    points="9.06 20.89 25.85 35.74 50.46 9.35"
                  />
                </Svg>
              ) : null}
              {item.surveySelectNumber}. {item.surveySelectContent}
            </motion.li>
          );
        })}
      </ul>
      <div className="button-wrap">
        <motion.button
          variants={EleVar}
          className="button"
          onClick={prevLevelHandler}
        >
          이전
        </motion.button>
        <motion.button
          variants={EleVar}
          className="button"
          onClick={nextLevelHandler}
        >
          {level < 3 ? "다음" : "설문결과보기"}
        </motion.button>
      </div>
    </FormWrapper>
  );
};

export default ServeyForm;
