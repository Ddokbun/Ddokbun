import { Wrapper } from "./styles";
import { useEffect, useState } from "react";
import Image from "next/image";
import Temp from "../../../assets/temp.jpg";
import { fetchTodayPlant } from "../../../apis/search";
import { PlantType } from "../../../types/search/recommend.interface";

const RecommendPlant: React.FC<{ data: PlantType }> = ({ data }) => {
  const url = data.itemImageUrl;
  console.log(url);
  return (
    <Wrapper>
      <div className="title">
        <h2>오늘의 식물</h2>
      </div>
      <div className="img-wrap">
        <Image
          // src={Temp}
          src={`${url}`}
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
