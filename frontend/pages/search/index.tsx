import { GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../styles/search/styles";
import RecommendPlant from "../../components/search/RecommendPlant";
import SearchBar from "../../components/search/SearchBar";
import SearchButton from "../../components/search/SearchButton";
import { PlantArray } from "../../types/search/recommend.interface";
import { fetchTodayPlant } from "../../apis/search";
import { fetchAllPlantsList } from "../../apis/manage";
import { PlantListArray } from "../../types/search/searchbar.interface";

export const getStaticProps: GetStaticProps = async context => {
  const data = await fetchTodayPlant();
  const plants = await fetchAllPlantsList();
  return {
    props: {
      data,
      plants,
    },
  };
};

const Search: NextPage<{ data: PlantArray; plants: PlantListArray }> = ({
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
