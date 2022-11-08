import React from "react";
import { Theme } from "../../../styles/theme";
import { Wrapper } from "./styles";
import plant from "../../../assets/plant.png";
import Image from "next/image";
import { TextBtn } from "../../../common/Button";
import { PlantListType } from "../../../pages/manage/[userseq]";
import { useRouter } from "next/router";

const CardItem: React.FC<PlantListType> = plant => {
  //   식물이름, 식물 pk, 식물 이미지

  const router = useRouter();

  const onShowDetailHandler = () => {
    router.push(`/manage/myplant/${plant.potSerial}`);
  };

  return (
    <Wrapper>
      <h2>똑분</h2>
      <div className="plantImg">
        <Image
          onClick={onShowDetailHandler}
          className="image"
          // layout="fill"
          width={450}
          height={450}
          src={`https://ddokbun.com/api//resources/s3?plantSeq=${plant.plantSeq}`}
          alt="식물이미지"
        />
      </div>
    </Wrapper>
  );
};

export default CardItem;
