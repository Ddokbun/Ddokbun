import { Wrapper } from "./styles";
import { useEffect, useState } from "react";
import Image from "next/image";
import Temp from "../../../assets/temp.jpg";
import { fetchTodayPlant } from "../../../apis/search";
import { ListObjectItem } from "../../../types/search/recommend.interface";
import Link from "next/link";

const RecommendPlant: React.FC<{ data: ListObjectItem }> = ({ data }) => {
  const url = data.itemImageUrl;
  return (
    <Wrapper>
      <div className="title">
        <h2>오늘의 식물</h2>
      </div>
      <div className="img-wrap">
        <Link href={`/commerce/product/${data?.itemSeq}`}>
          <Image
            // src={Temp}
            src={`${url}`}
            alt="임시상품이미지"
            className="img"
            width={500}
            height={500}
          />
        </Link>
      </div>
    </Wrapper>
  );
};

export default RecommendPlant;
