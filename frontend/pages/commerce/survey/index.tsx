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
  const [answer, setAnswer] = useState<number[]>([0, 0, 0, 0]);
  const [surveyComplete, setSurveyComplete] = useState([]);
  const [level, setLevel] = useState(0);

  const setAnswerHandler = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx: number,
  ) => {
    const temp = (event.target as HTMLDivElement).id;
    setAnswer(val => {
      console.log(temp);

      return [...val.slice(0, idx), parseInt(temp), ...val.slice(idx + 1)];
    });
    console.log(answer);
  };

  // const data = await fetchSurveyComplete(answer);
  // setSurveyComplete(data);
  return (
    <Wrapper>
      <div className="contents">
        <div className="survey">
          {surveys.map((item, idx) => {
            return (
              <ServeyForm
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
      </div>

      {/* <SurveyComplete items={surveyComplete} /> */}
    </Wrapper>
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
