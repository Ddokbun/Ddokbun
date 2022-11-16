import React, { Dispatch, SetStateAction, useState } from "react";
import { start } from "repl";
import Dot from "../../../common/Dot";
import {
  EleVar,
  WrapperVar,
  SvgAni,
} from "../../../styles/animations/animation";
import { FormWrapper } from "./styles";
import { motion } from "framer-motion";
import { ISurvey, ISurveyItem } from "../../../types/commerce/survey.interface";
import Check from "../../../assets/icon/check.svg";

const ServeyForm: React.FC<{
  survey: ISurveyItem;
  level: number;
  answer: number[];
  setLevel: Dispatch<SetStateAction<number>>;
  setAnswerHandler: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    idx: number,
  ) => void;
}> = ({ survey, level, setLevel, setAnswerHandler, answer }) => {
  return (
    <FormWrapper variants={WrapperVar} initial="start" animate="end">
      <div className="form-wrap">
        <h1>
          {" "}
          Q{level + 1}. {survey.survey.surveyContent}
        </h1>

        <div className="wrap">
          {survey.surveySelectList.map((item, idx) => {
            return (
              <div
                id={String(idx + 1)}
                key={idx}
                onClick={event => setAnswerHandler(event, level)}
                className="selector"
              >
                {item.surveySelectContent}
              </div>
            );
          })}
        </div>
      </div>
    </FormWrapper>
  );
};

export default ServeyForm;
