import react from "react";
import { Wrapper } from "./styles";
import Image from "next/image";
import tempSearch01 from "../../../assets/onboarding/tempSearch01.jpg";
import tempSearch02 from "../../../assets/onboarding/tempSearch02.jpg";

const SubContents = () => {
  return (
    <Wrapper>
      <div className="subcontent-wrap">
        <div className="back-img">
          <Image
            src={tempSearch01}
            alt="임시 메인 이미지"
            className="banner-img"
          />
        </div>
        <div className="front-img">
          <Image
            src={tempSearch02}
            alt="임시 메인 이미지"
            className="banner-img"
          />
        </div>
        <div className="title">
          <h2>Plant Search</h2>
          <h3>AI로 더 정확하고 간편하게, 식물 검색 </h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default SubContents;
