import React from "react";
import image from "../../../../../assets/temp.jpg";
import SearchCardItem from "../SearchCardItem";

export const DummyData = [
  {
    image: image,
    krName: "신혜원",
    egName: "Hyewon Shin",
    plantSeq: "2",
  },
  {
    image: image,
    krName: "김철수",
    egName: "Hyewon Shin",
    plantSeq: "3",
  },
  {
    image: image,
    krName: "김가네",
    egName: "Hyewon Shin",
    plantSeq: "4",
  },
  {
    image: image,
    krName: "신가네",
    egName: "Hey yooooo",
    plantSeq: "5",
  },
];

const SearchCardList: React.FC<{}> = () => {
  const itemList = DummyData.map(plant => {
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
