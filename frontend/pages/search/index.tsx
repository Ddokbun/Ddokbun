import React, { useEffect } from "react";
import { NextPage } from "next";
import { Wrapper } from "../../styles/search/styles";
import RecommendPlant from "../../components/search/RecommendPlant";
import SearchBar from "../../components/search/SearchBar";
import SearchButton from "../../components/search/SearchButton";

const Search: NextPage = () => {
  return (
    <Wrapper>
      <SearchBar></SearchBar>
      <SearchButton></SearchButton>
      <RecommendPlant></RecommendPlant>
    </Wrapper>
  );
};

export default Search;
