import React from "react";
import { SearchPlantType } from "../../../../../pages/manage/add/search";
import SearchCardItem from "../SearchCardItem";

const SearchCardList: React.FC<{
  data: SearchPlantType[];
  isDelivery:boolean
}> = ({ data, isDelivery }) => {
  const itemList = data.map(plant => {
    return (
      <SearchCardItem
        image={plant.image}
        krName={plant.krName}
        egName={plant.egName}
        plantSeq={plant.plantSeq}
        key={plant.plantSeq}
        isDelivery={isDelivery}
      />
    );
  });

  return <>{itemList}</>;
};

export default SearchCardList;
