import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../styles/search/styles";
import RecommendPlant from "../../components/search/RecommendPlant";
import SearchBar from "../../components/search/SearchBar";
import SearchButton from "../../components/search/SearchButton";
import { PlantArray } from "../../types/search/recommend.interface";
import { fetchTodayPlant } from "../../apis/search";
import { fetchAllPlantsList } from "../../apis/manage";
import { SearchInput } from "../../common/Input";

export const getStaticProps: GetStaticProps = async context => {
  const data = await fetchTodayPlant();
  const plants = await fetchAllPlantsList();
  console.log(data);
  return {
    props: {
      data,
      plants,
    },
  };
};
export interface Plants {
  plantSeq: number;
  plantName: string;
  plantNeName: string;
  plantZRName?: string;
  imagePath: string;
  disnName?: string;
}
const Search: NextPage<{ data: PlantArray; plants: Plants }> = ({
  data,
  plants,
}) => {
  return (
    <Wrapper>
      <SearchBar plants={plants}></SearchBar>
      <SearchButton></SearchButton>
      <RecommendPlant data={data.content[0]}></RecommendPlant>
    </Wrapper>
  );
};

export default Search;
