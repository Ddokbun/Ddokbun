import { Wrapper } from "./styles";
import { useEffect } from "react";
import Image from "next/image";
import Temp from "../../../assets/temp.jpg";
import { fetchTodayPlant } from "../../../apis/search";

const RecommendPlant = () => {
  useEffect(() => {
    fetchTodayPlant();
  }, []);

  return (
    <Wrapper>
      <div className="title">
        <h2>오늘의 식물</h2>
      </div>
      <div className="img-wrap">
        <Image
          src={Temp}
          // src="https://ddokbun.com/api/resources/s3?plantSeq=1"
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
