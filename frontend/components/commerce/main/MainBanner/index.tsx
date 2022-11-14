import { Wrapper } from "./styles";
import Link from "next/link";
import Image from "next/image";
import MainImg from "../../../../assets/commerce/main/main_banner.jpg";

const MainBanner = () => {
  return (
    <Wrapper>
      <div className="wrap">
        <h2>Commerce</h2>
      </div>
      <div className="img-wrap">
        <Image
          src={MainImg}
          alt="커머스 메인 배너 이미지 입니다."
          layout="fill"
          objectFit="contain"
        />
      </div>
    </Wrapper>
  );
};

export default MainBanner;
