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

const ServeyForm = React.forwardRef<
  React.RefObject<HTMLDivElement>,
  {
    survey: ISurveyItem;
    level: number;
    answer: number[];
    setLevel: Dispatch<SetStateAction<number>>;
    setAnswerHandler: (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      idx: number,
    ) => void;
  }
>(({ survey, level, setLevel, setAnswerHandler, answer }, ref) => {
  return (
    <FormWrapper variants={WrapperVar} initial="start" animate="end">
      <div className="form-wrap">
        <h1>
          {" "}
          Q{level + 1}. {survey.survey.surveyContent}
        </h1>

        <div ref={ref as any} className="wrap">
          {survey.surveySelectList.map((item, idx) => {
            return (
              <div
                id={String(idx + 1)}
                key={idx}
                onClick={event => setAnswerHandler(event, level)}
                className={
                  answer[level] === idx + 1 ? "selector now" : "selector"
                }
              >
                {item.surveySelectContent}
              </div>
            );
          })}
        </div>
      </div>
    </FormWrapper>
  );
});

export default ServeyForm;
