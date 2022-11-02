import React from "react";
import { Wrapper } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function SearchBar() {
  return (
    <Wrapper>
      <div className="title">
        <h2>어떤 식물을 찾고 계신가요?</h2>
      </div>
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
}

export default SearchBar;
