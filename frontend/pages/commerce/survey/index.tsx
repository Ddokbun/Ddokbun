import { GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../../styles/commerce/servey/styles";
import BackgroudImage from "../../../assets/onboarding/mainImg.jpg";
import Image from "next/image";
import ServeyForm from "../../../components/commerce/survey";
import Dot from "../../../common/Dot";
import { fetchServeyList } from "../../../apis/commerce";
import { useEffect, useState } from "react";
import { ISurvey, ISurveyItem } from "../../../types/commerce/survey.interface";

const Servey: NextPage<{ surveys: ISurvey[] }> = ({ surveys }) => {
  const [answer, setAnswer] = useState([]);
  useEffect(() => {
    // setAnswer([...Array(surveys.length).fill(0)]);
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
        <ServeyForm />
      </div>
    </Wrapper>
  );
};

export default Servey;

export const getStaticProps: GetStaticProps = async () => {
  const surveys = await fetchServeyList();
  console.log(surveys);

  return {
    props: {
      surveys,
    },
  };
};
