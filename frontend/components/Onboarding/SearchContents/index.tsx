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
          <h2>Plant Search</h2>
          <h3>AI로 더 정확하고 간편하게, 식물 검색 </h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default SubContents;
