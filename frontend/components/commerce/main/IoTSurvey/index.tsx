import { Wrapper } from "./styles";
import Link from "next/link";

const IoTBanner = () => {
  return (
    <Wrapper>
      <div className="font-wrap">
        <h2>
          내 화분 기반 <br />
          식물 추천 받아보기
        </h2>
      </div>
      <div className="button">
        <Link href={"/commerce/list/초보집사"}>
          <div className="button-wrap">바로가기</div>
        </Link>
      </div>
    </Wrapper>
  );
};

export default IoTBanner;
