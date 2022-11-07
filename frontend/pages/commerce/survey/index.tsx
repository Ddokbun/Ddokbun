import { GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../../styles/commerce/servey/styles";
import BackgroudImage from "../../../assets/onboarding/mainImg.jpg";
import Image from "next/image";
import ServeyForm from "../../../components/commerce/survey";
import Dot from "../../../common/Dot";
import { fetchServeyList } from "../../../apis/commerce";
import { SetStateAction, useEffect, useState } from "react";
import { ISurvey, ISurveyItem } from "../../../types/commerce/survey.interface";

const Servey: NextPage<{ surveys: ISurveyItem[] }> = ({ surveys }) => {
  const [answer, setAnswer] = useState<number[]>([]);
  const [level, setLevel] = useState(0);
  useEffect(() => {
    setAnswer([...Array(surveys.length).fill(0)]);
  }, []);
  console.log(answer);
  console.log(surveys);

  console.log(surveys.length);

  return (
    <Wrapper>
      <Image
        className="plz"
        src={BackgroudImage}
        layout="fill"
        alt="설문조사 배경이미지"
      />
      <div className="gradation"></div>
      <div className="servey-wrapper">
        {/* 각 컴포넌트에 질문가 대답 넣기, 히든을 활용해서 렌더링될때 에니메이션작동하게하기 */}
        <ServeyForm survey={surveys[level]} level={level} setLevel={setLevel} />
        <ServeyForm survey={surveys[level]} level={level} setLevel={setLevel} />
        <ServeyForm survey={surveys[level]} level={level} setLevel={setLevel} />
        <ServeyForm survey={surveys[level]} level={level} setLevel={setLevel} />
      </div>
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
