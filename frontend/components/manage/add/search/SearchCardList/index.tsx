import React from "react";
import { SearchPlantType } from "../../../../../pages/manage/add/search";
import SearchCardItem from "../SearchCardItem";

const SearchCardList: React.FC<{ data: SearchPlantType[] }> = ({ data }) => {
  const itemList = data.map(plant => {
    return (
      <SearchCardItem
        image={plant.image}
        krName={plant.krName}
        egName={plant.egName}
        plantSeq={plant.plantSeq}
        key={plant.plantSeq}
      />
    );
  });

  return <>{itemList}</>;
};

export default SearchCardList;
