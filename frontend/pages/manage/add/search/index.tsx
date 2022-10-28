import React from "react";
import { SearchInput } from "../../../../common/Input";
import SearchCardList from "../../../../components/manage/add/search/SearchCardList";
import { Wrapper } from "../../../../styles/manage/add/search/styles";

const SearchPlant = () => {
  return (
    <Wrapper>
      <SearchInput
        placeholder="찾는 식물 이름을 검색해주세요."
        disabled={false}
      />
      <SearchCardList />
    </Wrapper>
  );
};

export default SearchPlant;
