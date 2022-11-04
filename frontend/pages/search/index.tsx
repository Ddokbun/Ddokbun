import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../styles/search/styles";
import RecommendPlant from "../../components/search/RecommendPlant";
import SearchBar from "../../components/search/SearchBar";
import SearchButton from "../../components/search/SearchButton";
import { fetchTodayPlant } from "../../apis/search";
import { PlantArray } from "../../types/search/recommend.interface";

export const getStaticProps: GetStaticProps = async context => {
  const data = await fetchTodayPlant();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

const Search: NextPage<{ data: PlantArray }> = ({ data }) => {
  return (
    <Wrapper>
      <SearchBar></SearchBar>
      <SearchButton></SearchButton>
      <RecommendPlant data={data.content[0]}></RecommendPlant>
    </Wrapper>
  );
};

export default Search;
