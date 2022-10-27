import { Wrapper } from "./styles";
import { Theme } from "../../../styles/theme";
import { SearchBtn } from "../../../common/Button";

const SearchButton = () => {

  return (
    <Wrapper>
      <div className="button-wrap">
          <SearchBtn color={Theme.color.ivoryHover} path={`commerce/list/params?=초보집사`}>
            #초보집사
          </SearchBtn>
          <SearchBtn color={Theme.color.ivory} path={`commerce/list/params?=공기정화`}>
            #공기정화
          </SearchBtn>
          <SearchBtn color={Theme.color.brownHover} path={`commerce/list/params?=집꾸미기`}>
            #집꾸미기
          </SearchBtn>
          <SearchBtn color={Theme.color.brown} path={`commerce/list/params?=반려동물`}>
            #반려동물
          </SearchBtn>
      </div>
    </Wrapper>
  );
};

export default SearchButton;
