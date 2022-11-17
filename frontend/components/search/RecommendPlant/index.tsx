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
        <div className="hot-plant">
          <Image
            src={`${url}`}
            alt="오늘의 식물 이미지"
            layout="fill"
            objectFit="cover"
          />
          <Link href={`/commerce/product/${data?.itemSeq}`}>
            <div className="opacity">
              <h2>{data?.itemName}</h2>
            </div>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default RecommendPlant;
