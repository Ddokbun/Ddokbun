import { Wrapper } from "./styles";
import Image from "next/image";
import temp01 from "../../../assets/onboarding/IoT_twin.gif";
import temp02 from "../../../assets/onboarding/tempSmartPot02.jpg";
import temp03 from "../../../assets/onboarding/tempSmartPot03.jpg";

const SubItem = () => {
  return (
    <Wrapper>
      <div className="subcontent-wrap">
        <div className="position-wrap">
          <div className="title">
            <h2>Ddokbun's Smart Plant Pot</h2>
            <h3>똑분만의 스마트화분을 지금 만나보세요</h3>
          </div>

          <div className="pot-img">
            <div className="img-01">
              등록 내용 GIF 넣기
              <Image
                src={temp01}
                alt="똑분 스마트화분 이미지 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="img-02">
              물주기 GIF 넣기
              {/* <Image
                src={temp01}
                alt="똑분 스마트화분 이미지 2"
                layout="fill"
                objectFit="cover"
              /> */}
            </div>
            <div className="img-03">
              그래프 내용 GIF 넣기
              {/* <Image
                src={temp03}
                alt="똑분 스마트화분 이미지 3"
                layout="fill"
                objectFit="cover"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SubItem;
