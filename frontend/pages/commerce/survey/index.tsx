import { GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../../styles/commerce/servey/styles";
import BackgroudImage from "../../../assets/onboarding/mainImg.jpg";
import Image from "next/image";
import ServeyForm from "../../../components/commerce/survey";
import Dot from "../../../common/Dot";
import { fetchServeyList, fetchSurveyComplete } from "../../../apis/commerce";
import { SetStateAction, useEffect, useState } from "react";
import { ISurvey, ISurveyItem } from "../../../types/commerce/survey.interface";
import SurveyComplete from "../../../components/commerce/survey/complete";

const Servey: NextPage<{ surveys: ISurveyItem[] }> = ({ surveys }) => {
  const [answer, setAnswer] = useState<number[]>([]);
  const [surveyComplete, setSurveyComplete] = useState([]);
  const [level, setLevel] = useState(0);

  const setAnswerHandler = async (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    const nowAnswer = parseInt(event.currentTarget.id);

    setAnswer(val => {
      return [...val.slice(0, level), nowAnswer, ...val.slice(level + 1)];
    });
    switch (level < 3) {
      case true:
        return;
      case false: {
        const data = await fetchSurveyComplete(answer);
        setSurveyComplete(data);
      }
    }
  };

  return (
    <Wrapper>
      <Image
        className="plz"
        src={BackgroudImage}
        layout="fill"
        alt="설문조사 배경이미지"
      />
      <div className="gradation"></div>

      {level != 4 ? (
        <div className="survey-wrapper">
          <div className="survey">
            <div className="dots">
              <Dot now={level == 0 ? true : false} />
              <Dot now={level == 1 ? true : false} />
              <Dot now={level == 2 ? true : false} />
              <Dot now={level == 3 ? true : false} />
            </div>
            {surveys.map((item, idx) => {
              return level == idx ? (
                <ServeyForm
                  key={idx}
                  survey={item}
                  level={level}
                  setLevel={setLevel}
                  answer={answer}
                  setAnswerHandler={setAnswerHandler}
                />
              ) : null;
            })}
          </div>
        </div>
      ) : (
        <SurveyComplete items={surveyComplete} />
      )}
    </Wrapper>
  );
};

export default Servey;

export const getStaticProps: GetStaticProps = async () => {
  const surveys = await fetchServeyList();

  return {
    props: {
      surveys,
    },
  };
};
