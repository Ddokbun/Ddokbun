import React, { useEffect, useState } from "react";
import { SearchInput } from "../../../../common/Input";
import SearchCardList from "../../../../components/manage/add/search/SearchCardList";
import { Wrapper } from "../../../../styles/manage/add/search/styles";
import image from "../../../../assets/temp.jpg";
import { StaticImageData } from "next/image";

export interface SearchPlantType {
  image: StaticImageData;
  krName: string;
  egName: string;
  plantSeq: string;
}

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

const SearchPlant = () => {
  const [searchInput, setSearchInput] = useState("");
  const [plantList, setPlantList] = useState(DummyData);
  useEffect(() => {
    if (searchInput === "" || searchInput === null) {
      setPlantList(DummyData);
      return;
    }
    const newData = DummyData.filter(list => {
      return list.krName.includes(searchInput);
    });

    setPlantList(newData);
  }, [searchInput]);

  return (
    <Wrapper>
      <SearchInput
        placeholder="찾는 식물 이름을 검색해주세요."
        disabled={false}
        setSearchInput={setSearchInput}
        // value={searchInput}
      />
      <SearchCardList data={plantList} isDelivery={false} />
    </Wrapper>
  );
};

export default SearchPlant;
