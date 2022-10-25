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
          <h2>Smart Flower Pot</h2>
          <h3>똑분에서 제작한 IoT 화분을 만나보세요</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default SubContents;
