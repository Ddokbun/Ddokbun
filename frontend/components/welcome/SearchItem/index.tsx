import { Wrapper } from "./styles";
import Image from "next/image";
import tempSearch01 from "../../../assets/onboarding/manage-01.png";

const SearchItem = () => {
  return (
    <Wrapper>
      <div className="content-wrap">
        <div className="img">
          <Image
            layout="fill"
            objectFit="cover"
            src={tempSearch01}
            alt="똑분 식물추천 설명 이미지"
          />
          <div className="background">
            <div className="font-wrap">
              <h2>나의 환경에 맞는 식물 추천</h2>
              <h3>
                이미 똑분의 스마트화분을 가지고 계신가요?
                <br />
                <br />
                현재 키우고 있는 식물과 식물이 놓여진 환경 데이터인
                <br />
                온도와 습도, 토양습도, 광량등을 분석해서
                <br />
                <br />
                똑분이 있는 환경에서 기르기 좋은 식물을 추천받아보세요.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchItem;
