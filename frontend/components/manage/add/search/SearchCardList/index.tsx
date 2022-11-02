import React from "react";
import { Plants } from "../../../../../pages/manage/add/search";
import SearchCardItem from "../SearchCardItem";

const SearchCardList: React.FC<{
  data: Plants[];
  isDelivery: boolean;
}> = ({ data, isDelivery }) => {
  const itemList = data.map(plant => {
    return (
      <SearchCardItem
        plantName={plant.plantName}
        plantNeName={plant.plantNeName}
        plantSeq={plant.plantSeq}
        key={plant.plantSeq}
        isDelivery={isDelivery} plantZRName={""} imagePath={""} disnName={""}      />
    );
  });

  return <>{itemList}</>;
};

export default SearchCardList;
