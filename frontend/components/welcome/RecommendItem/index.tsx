import { Wrapper } from "./styles";
import Image from "next/image";
import adviceImg from "../../../assets/onboarding/tempAdvice01.jpg";
import { forwardRef } from "react";

const RecommendItem = forwardRef<RefType, PropsType>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <div className="content-wrap">
        <div className="img">
          <Image
            layout="fill"
            objectFit="cover"
            src={adviceImg}
            alt="똑분 식물추천 설명 이미지"
          />
          <div className="background">
            <div className="font-wrap">
              <h2>Ddokbun's 검색 기술</h2>
              <h3>
                길을 지나가다 "이 꽃 이름 뭐지?"라는 궁금증이 드신 적
                있으신가요?
                <br />
                <br />
                길 위에 있는 수많은 식물들의 이름을 알고, 정보를 검색하기는 매우
                힘들죠. <br />
                똑분은 이런 문제점을 해결하고자, 사진을 통한 검색 기능을
                구현했어요!
                <br />
                <br />
                지금 똑분에서 사진을 통해 식물 검색을 경험해보세요.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
});

export default RecommendItem;
