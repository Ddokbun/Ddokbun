import React from "react";
import { Theme } from "../../../styles/theme";
import { Wrapper } from "./styles";
import plant from "../../../assets/plant.png";
import Image from "next/image";
import { TextBtn } from "../../../common/Button";
import { PlantListType } from "../../../pages/manage/[userseq]";

const CardItem: React.FC<PlantListType> = plant => {
  //   식물이름, 식물 pk, 식물 이미지

  return (
    <Wrapper>
      <h2>똑분</h2>
      <div className="plantImg">
        <Image
          className="image"
          // layout="fill"
          width={450}
          height={450}
          src={`https://ddokbun.com/api//resources/s3?plantSeq=${plant.plantSeq}`}
          alt="식물이미지"
        />
      </div>
      <div className="btnContainer">
        <TextBtn
          color={Theme.color.brownHover}
          path={`/manage/myplant/${plant.potSerial}`}
        >
          보러 가기
        </TextBtn>
      </div>
    </Wrapper>
  );
};

export default CardItem;
