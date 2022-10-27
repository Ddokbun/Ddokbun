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
          <Image src={temp02} alt="임시 메인 이미지" className="banner-img" />
          <Image src={temp01} alt="임시 메인 이미지" className="banner-img" />
          <Image src={temp03} alt="임시 메인 이미지" className="banner-img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default SubItem;
