import react from "react";
import { Wrapper } from "./styles";
import Image from "next/image";
import mainImg from "../../../assets/onboarding/mainImg.jpg";

const MainContents = () => {
  return (
    <Wrapper>
      <div className="banner-wrap">
        <Image src={mainImg} alt="임시 메인 이미지" className="banner-img" />
        <div className="title">
          <h1>Ddokbun</h1>
          <h2>스마트 화분 어플리케이션</h2>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainContents;
