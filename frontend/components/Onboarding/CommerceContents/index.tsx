import react from "react";
import { Wrapper } from "./styles";
import Image from "next/image";
import mainImg from "../../../assets/onboarding/mainImg.jpg";

const SubContents = () => {
  return (
    <Wrapper>
      <div className="subcontent-wrap">
        {/* <Image src={mainImg} alt="임시 메인 이미지" className="banner-img" /> */}
        <div className="title">
          <h3>개인화된 추천 시스템을 탑재한 화분 쇼핑</h3>
          <h2>E-Commerce</h2>
        </div>
      </div>
    </Wrapper>
  );
};

export default SubContents;
