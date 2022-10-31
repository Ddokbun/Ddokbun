import { NextPage } from "next";
import { Wrapper } from "../../../styles/commerce/servey/styles";
import BackgroudImage from "../../../assets/onboarding/mainImg.jpg";
import Image from "next/image";
import ServeyForm from "../../../components/commerce/servey";

const Servey: NextPage = () => {
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
