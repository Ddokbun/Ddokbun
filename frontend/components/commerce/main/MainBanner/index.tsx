import { Wrapper } from "./styles";
import Link from "next/link";
import Image from "next/image";
import MainImg from "../../../../assets/commerce/main/main_banner.jpg";

const MainBanner = () => {
  return (
    <Wrapper>
      <div className="wrap">
        <div className="img-wrap">
          <Image
            src={MainImg}
            alt="커머스 메인 배너 이미지 입니다."
            layout="fill"
            objectFit="cover"
          />
          <div className="wrap-front">
            <h2>Commerce</h2>
            <div className="button-wrap">
              <Link href={"commerce/survey"}>
                <button>Survey</button>
              </Link>
              <button>View all</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainBanner;
