import React from "react";
import ProductCard from "../../../../common/Cards/ProductCard";
import { ItemObject } from "../../../../types/commerce/detail.interface";
import { ListObjectItem } from "../../../../types/commerce/list.interface";

import { Wrapper, GridWrapper } from "./styles";

const SurveyComplete: React.FC<{ items: ListObjectItem[] }> = ({ items }) => {
  return (
    <Wrapper>
      <div className="contents-box">
        <h1>이런 식물은 어떠세요?</h1>
        <GridWrapper>
          {items.map(item => {
            return null;
          })}
        </GridWrapper>
      </div>
    </Wrapper>
  );
};

export default SurveyComplete;
