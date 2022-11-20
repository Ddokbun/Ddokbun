import { Wrapper } from "./styles";
import Link from "next/link";
import Banner from "../../../../assets/commerce/plants/banner-02.png";
import Image from "next/image";
import { EleVar } from "../../../../styles/animations/animation";

const SurveyBanner = () => {
  return (
    <Wrapper variants={EleVar}>
      <div className="img-wrap">
        <Image
          src={Banner}
          alt="설문 배너 이미지"
          layout="fill"
          objectFit="cover"
        />
        <div className="font-wrap">
          <div className="content-wrap">
            <h2>
              나에게 딱 맞는 <br />
              식물 추천 받아보기
            </h2>
            <div className="button">
              <Link href={"/commerce/survey"}>
                <div className="button-wrap">바로가기</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SurveyBanner;
