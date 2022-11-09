import React, { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "../../../common/Input";

const SearchBar = ({ plants }) => {
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
      <SearchInput
        placeholder="찾는 식물 이름을 검색해주세요."
        disabled={false}
        setSearchInput={setSearchInput}
        value={searchInput}
      ></SearchInput>

      <div className="wrap">
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            className="search-term"
            placeholder="식물 이름 검색"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchBar;
