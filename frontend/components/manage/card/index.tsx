import React from "react";
import TextBtn from "../../../common/TextBtn";
import { Theme } from "../../../styles/theme";
import { CardContainer, PlantImage, Title } from "./styles";
import plant from "../../../src/assets/plant.png";

const Card: React.FC = () => {
  //   식물이름, 식물 pk, 식물 이미지

  const potSeq = 1;
  return (
    <CardContainer>
      <Title>똑분</Title>
      <PlantImage src={plant.src} alt="식물이미지" />
      <div className="btnContainer">
        <TextBtn color={Theme.color.brown} path={`manage/${potSeq}`}>
          보러 가기
        </TextBtn>
      </div>
    </CardContainer>
  );
};

export default Card;
