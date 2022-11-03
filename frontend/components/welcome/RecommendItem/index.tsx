import { Wrapper } from "./styles";
import Image from "next/image";
import adviceImg from "../../../assets/onboarding/tempAdvice01.jpg";

const RecommendItem = () => {
  return (
    <Wrapper>
      <div className="subcontent-wrap">
        <div className="title">
          <h2>Personal Advice</h2>
          <h3>현재 식물의 상태를 분석하고, 맞춤 조언을 해드릴게요</h3>
          <div className="img">
            <Image
              layout="fill"
              src={adviceImg}
              alt="똑분 식물추천 설명 이미지"
              className="banner-img"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RecommendItem;
