import React from "react";
import { PlantListType } from "../../../pages/manage/[userseq]";
import CardItem from "../CardItem";
import { Wrapper } from "./styles";

const CardList: React.FC<{ plantsList: PlantListType[] }> = ({
  plantsList,
}) => {
  return (
    <Wrapper>
      {plantsList?.map(plant => {
        return (
          <li key={plant.potSerial}>
            <CardItem
              plantSeq={plant.plantSeq}
              potSerial={plant.potSerial}
              plantNickname={plant.plantNickname}
            />
          </li>
        );
      })}
    </Wrapper>
  );
};

export default CardList;
