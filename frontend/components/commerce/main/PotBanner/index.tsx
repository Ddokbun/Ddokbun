import { Wrapper } from "./styles";
import Link from "next/link";
import Image from "next/image";
import PotImg from "../../../../assets/smart-pot.jpg";

const PotBanner = () => {
  return (
    <Wrapper>
      <div className="img-wrap">
        <Image
          src={PotImg}
          alt="커머스 메인 배너 이미지 입니다."
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div>가나다라 마바사아</div>
    </Wrapper>
  );
};

export default PotBanner;
