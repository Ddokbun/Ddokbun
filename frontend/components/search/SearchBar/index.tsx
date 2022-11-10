import React, { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "../../../common/Input";

export interface Plants {
  plantSeq: number;
  plantName: string;
  plantNeName: string;
  plantZRName?: string;
  imagePath: string;
  disnName?: string;
}

const SearchBar: React.FC<{ plants: Plants[] }> = ({ plants }) => {
  const [searchInput, setSearchInput] = useState("");
  const [plantList, setPlantList] = useState(plants);

  useEffect(() => {
    if (searchInput === "" || searchInput === null) {
      setPlantList(plants);
      return;
    }
    const newData = plants.filter(plant => {
      return plant.plantName.includes(searchInput);
    });

    setPlantList(newData);
  }, [plants, searchInput]);
  return (
    <Wrapper>
      <div className="title">
        <h2>어떤 식물을 찾고 계신가요?</h2>
      </div>
      <div className="search">
        <SearchInput
          placeholder="찾는 식물 이름을 검색해주세요."
          disabled={false}
          setSearchInput={setSearchInput}
          value={searchInput}
          path={"search"}
        ></SearchInput>
      </div>
    </Wrapper>
  );
};

export default SearchBar;
