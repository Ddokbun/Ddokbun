import { GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../../styles/commerce/servey/styles";
import BackgroudImage from "../../../assets/onboarding/mainImg.jpg";
import Image from "next/image";
import ServeyForm from "../../../components/commerce/servey";
import Dot from "../../../common/Dot";
import { fetchServeyList } from "../../../apis/commerce";
import { useEffect } from "react";

const Servey: NextPage = () => {
  useEffect(() => {
    const aa = async () => {
      const data = await fetchServeyList();
      console.log(data);
    };
    aa();
  }, []);
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
  const serveys = await fetchServeyList();
  // console.log(serveys);

  return {
    props: {},
  };
};
