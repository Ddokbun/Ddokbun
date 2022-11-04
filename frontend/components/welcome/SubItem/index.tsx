import { Wrapper } from "./styles";
import Image from "next/image";
import temp01 from "../../../assets/onboarding/tempSmartPot.jpg";
import temp02 from "../../../assets/onboarding/tempSmartPot02.jpg";
import temp03 from "../../../assets/onboarding/tempSmartPot03.jpg";

const SubItem = () => {
  return (
    <Wrapper>
      <div className="subcontent-wrap">
        <div className="title">
          <h2>Smart Flower Pot</h2>
          <h3>똑분에서 제작한 IoT 화분을 만나보세요</h3>
        </div>
        <div className="pot-img">
          <Image
            src={temp02}
            alt="똑분 스마트화분 이미지 1"
            className="banner-img"
          />
          <Image
            src={temp01}
            alt="똑분 스마트화분 이미지 2"
            className="banner-img"
          />
          <Image
            src={temp03}
            alt="똑분 스마트화분 이미지 3"
            className="banner-img"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default SubItem;
