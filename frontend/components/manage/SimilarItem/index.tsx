import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { fetchSimilarItem } from "../../../apis/commerce";
import { fetchItemSeq } from "../../../apis/search";
import { Wrapper } from "./styles";

interface Props {
  potSerial: string;
  plantNickname?: string;
}

interface SimilarItemInfoType {
  plantSeq?: string;
  plantName?: string;
}

const SimilarItem: FC<Props> = ({ potSerial }) => {
  const [similarItemInfo, setSimilarItemInfo] = useState<SimilarItemInfoType>();
  const router = useRouter();
  const onShowDetailHandler = async () => {
    const itemSeq = await fetchItemSeq(Number(similarItemInfo?.plantSeq));

    router.push(`/commerce/product/${itemSeq}`);
  };
  useEffect(() => {
    const getInitialData = async () => {
      const getSimilaritem = await fetchSimilarItem(potSerial!);
      setSimilarItemInfo(getSimilaritem);
    };

    getInitialData();
  }, [potSerial]);

  return (
    <Wrapper>
      {similarItemInfo?.plantSeq ? (
        <>
          <Image
            src={`https://ddokbun.com/api/resources/s3?plantSeq=${similarItemInfo.plantSeq}`}
            alt="식물 이미지"
            width={"100%"}
            height={"100%"}
          />
          <p className="plant-name">{similarItemInfo.plantName}</p>
          <button onClick={onShowDetailHandler}>상세 정보 확인</button>
        </>
      ) : (
        <>
          <p>데이터가 아직 충분하지 않아요</p>
          <p>다른 방식으로 추천 받으시겠어요?</p>
          <div className="button-container">
            <Link href={"/commerce/survey"}>설문 조사</Link>
            <Link href={"/search"}>카테 고리</Link>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default SimilarItem;
