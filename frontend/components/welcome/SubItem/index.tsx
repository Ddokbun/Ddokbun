import { Wrapper } from "./styles";
import Image from "next/image";
import temp01 from "../../../assets/onboarding/IoT_twin.gif";
import temp02 from "../../../assets/onboarding/tempSmartPot02.jpg";
import temp03 from "../../../assets/onboarding/tempSmartPot03.jpg";

const SubItem = () => {
  return (
    <Wrapper>
      <div className="content-wrap">
        <div className="img">
          <Image
            layout="fill"
            objectFit="cover"
            src={temp02}
            alt="똑분 식물추천 설명 이미지"
          />
          <div className="background">
            <div className="font-wrap">
              <h2>Ddokbun's Smart Plant Pot</h2>
              <h3>
                똑분만의 스마트 화분을 소개합니다!
                <br />
                <br />
                외부에서도 관리가 간편하도록
                <br />
                버튼만 누르면 급수되는 '자동 물주기'와
                <br />
                그래프를 통한 데이터 확인,
                <br />
                귀여운 식물 캐릭터까지!
                <br />
                <br />
                지금 똑분에서 스마트화분을 구매해보세요.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SubItem;
