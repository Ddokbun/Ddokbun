import React, { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import { SearchInput } from "../../../common/Input";
import { PlantListArray } from "../../../types/search/searchbar.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SearchBar: React.FC<{ plants: PlantListArray }> = ({ plants }) => {
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
        <Link href={"search/ai-search"}>
          <div className="camera">
            <FontAwesomeIcon icon={faCamera} size="2x"></FontAwesomeIcon>
          </div>
        </Link>
      </div>
      <div></div>
    </Wrapper>
  );
};

export default SearchBar;
