import { Wrapper } from "./styles";
import Image from "next/image";
import Temp from "../../../assets/temp.jpg";

const RecommendPlant = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>오늘의 식물</h2>
      </div>
      <div className="img-wrap">
        <Image
          src={Temp}
          alt="임시상품이미지"
          className="img"
          width={500}
          height={500}
        />
      </div>
    </Wrapper>
  );
};

export default RecommendPlant;
