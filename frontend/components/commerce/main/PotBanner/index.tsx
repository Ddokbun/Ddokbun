import { Wrapper } from "./styles";
import Link from "next/link";
import Image from "next/image";
import PotImg from "../../../../assets/smart-pot.jpg";

const PotBanner = () => {
  return (
    <Wrapper>
      <div className="content-wrap">
        <div className="img-wrap">
          <Image
            src={PotImg}
            alt="커머스 메인 배너 이미지 입니다."
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="text-wrap">
        <div className="text">
          <h2>Ddokbun's Smart Plant Pot</h2>
          <h3>
            똑똑한 화분, 똑분에서 직접 제작하고 판매하는 스마트 화분이에요.
          </h3>
          <h3>
            키우는 식물의 온도, 습도, 토양습도, 물 주기까지 한 번에 확인하고,
          </h3>
          <h3>화분을 키울 곳의 생활 환경에 맞게 관리를 도와드릴게요.</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default PotBanner;
