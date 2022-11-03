import React from "react";
import { PlantListType } from "../../../pages/manage/[userseq]";
import CardItem from "../CardItem";
import { Wrapper } from "./styles";

const CardList: React.FC<{ plantsList: PlantListType[] }> = ({
  plantsList,
}) => {
  // 여기서 axios 할지 상위 컴포넌트에서 요청할지 확인필요

  return (
    <Wrapper>
      {plantsList?.map(plant => {
        return (
          <li key={plant.plantSeq}>
            <CardItem
              plantSeq={plant.plantSeq}
              potSerial={plant.potSerial}
              plantNickname={plant.plantNickname}
              imagePath={""}
            />
          </li>
        );
      })}
    </Wrapper>
  );
};

export default CardList;
