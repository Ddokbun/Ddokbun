import { Wrapper } from "./styles";
import Link from "next/link";

const SurveyBanner = () => {
  return (
    <Wrapper>
      <div className="font-wrap">
        <h2>
          나에게 딱 맞는 <br />
          식물 추천 받아보기
        </h2>
      </div>
      <div className="button">
        <Link href={"/commerce/products/3"}>
          <div className="button-wrap">바로가기</div>
        </Link>
      </div>
    </Wrapper>
  );
};

export default SurveyBanner;
