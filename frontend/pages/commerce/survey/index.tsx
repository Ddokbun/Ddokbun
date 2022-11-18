import { GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../../styles/commerce/servey/styles";
import BackgroudImage from "../../../assets/onboarding/mainImg.jpg";
import Image from "next/image";
import ServeyForm from "../../../components/commerce/survey";
import Dot from "../../../common/Dot";
import { fetchServeyList, fetchSurveyComplete } from "../../../apis/commerce";
import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { ISurvey, ISurveyItem } from "../../../types/commerce/survey.interface";
import SurveyComplete from "../../../components/commerce/survey/complete";

type IRefs = {
  id: any;
};

const Servey: NextPage<{ surveys: ISurveyItem[] }> = ({ surveys }) => {
  const [answer, setAnswer] = useState<number[]>([0, 0, 0, 0]);
  const [surveyComplete, setSurveyComplete] = useState([]);
  const [level, setLevel] = useState(0);
  const [complete, setComplete] = useState(false);
  const refs = Array(5)
    .fill(null)
    .map(item => React.createRef());

  const setAnswerHandler = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    idx: number,
  ) => {
    const temp = (event.target as HTMLDivElement).id;
    setAnswer(val => {
      console.log(temp);
      if (idx < 4) {
        (refs[idx].current as any).scrollIntoView({ behavior: "smooth" });
      }

      return [...val.slice(0, idx), parseInt(temp), ...val.slice(idx + 1)];
    });
  };

  const fetchAnswer = async () => {
    let flag = 1;
    console.log(answer);
    for (let i = 0; i < 4; i++) {
      if (answer[i] === 0) {
        console.log(i);

        flag = 0;
        (refs[i].current as any).scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
        return;
      }
    }

    // if (flag === 0) {
    //   return null;
    // }
    const data = await fetchSurveyComplete(answer);
    console.log(data);
    setSurveyComplete(data);
    setComplete(true);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {complete ? (
        <SurveyComplete
          items={surveyComplete}
          setComplete={setComplete}
          setAnswer={setAnswer}
        />
      ) : (
        <Wrapper>
          <div className="contents">
            <div className="survey">
              {surveys.map((item, idx) => {
                return (
                  <ServeyForm
                    ref={refs[idx] as any}
                    key={idx}
                    survey={item}
                    level={idx}
                    setLevel={setLevel}
                    answer={answer}
                    setAnswerHandler={setAnswerHandler}
                  />
                );
              })}
            </div>
            <div className="button" onClick={fetchAnswer}>
              추천받기
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Servey;
``;

export const getStaticProps: GetStaticProps = async () => {
  const surveys = await fetchServeyList();

  return {
    props: {
      surveys,
    },
  };
};
