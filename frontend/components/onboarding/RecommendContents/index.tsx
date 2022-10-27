import react from "react";
import { Wrapper } from "./styles";
import Image from "next/image";
import mainImg from "../../../assets/onboarding/tempAdvice01.jpg";

const SubContents = () => {
  return (
    <Wrapper>
      <div className="subcontent-wrap">
        <div className="title">
          <h2>Personal Advice</h2>
          <h3>현재 식물의 상태를 분석하고, 맞춤 조언을 해드릴게요</h3>
          <Image src={mainImg} alt="임시 메인 이미지" className="banner-img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default SubContents;
