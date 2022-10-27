import React from "react";
import CardItem from "../CardItem";

interface Plants {
  plantSeq: string;
  potSeq: string;
  imagePath: string;
  nickname: string;
}

const CardList: React.FC<{ plants: Plants[] }> = ({ plants }) => {
  // 여기서 axios 할지 상위 컴포넌트에서 요청할지 확인필요

  return (
    <ul>
      {/* {plants.map(plant => {
        <li>
          <CardItem
            plantSeq={plant.plantSeq}
            potSeq={plant.potSeq}
            nickname={plant.plantNickname}
            src={plant.imagePath}
          />
        </li>;
      })} */}
    </ul>
  );
};

export default CardList;
