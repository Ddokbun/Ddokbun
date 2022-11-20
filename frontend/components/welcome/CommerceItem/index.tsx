import { Wrapper } from "./styles";
import Image from "next/image";
import commerceImg01 from "../../../assets/onboarding/tempRecommend01.jpg";

const CommerceItem = () => {
  return (
    <Wrapper>
      <div className="content-wrap">
        <div className="img">
          <Image
            layout="fill"
            objectFit="cover"
            src={commerceImg01}
            alt="똑분 식물추천 설명 이미지"
          />
          <div className="background">
            <div className="font-wrap">
              <h2>설문조사 기반 식물 추천</h2>
              <h3>
                '나에게 딱 알맞는 식물'을 찾으신다면,
                <br />
                내가 살고 있는 곳, 나의 성격 등을 모두 고려해야 해요.
                <br />
                <br />
                똑분만의 설문조사로 내 환경을 알아보는 것은 어떤가요?
                <br />
                <br />
                설문이 완료되면, 환경을 분석해 식물을 추천해드릴게요.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CommerceItem;
