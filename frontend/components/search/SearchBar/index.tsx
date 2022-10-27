import React from "react";
import { Wrapper } from "./styles";

function SearchBar() {
  return (
    <Wrapper>
      <div className="title">
        <h2>어떤 식물을 찾고 계신가요?</h2>
        <div className="wrap">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="식물 이름 검색"
            />
            <button type="submit" className="searchButton">
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SearchBar;
