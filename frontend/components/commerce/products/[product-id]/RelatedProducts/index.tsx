import React from "react";
import Carousel from "../../../../../common/Carousel";
import { Wrapper } from "./styles";
import { useSelector } from "react-redux";
import { StoreState } from "../../../../../store";

const RelatedProducts: React.FC = () => {
  const relatedItems = useSelector(
    (state: StoreState) => state.relatedProductSlice.data,
  );

  return (
    <Wrapper>
      <h1>Other Plants</h1>
      <Carousel items={relatedItems} />
    </Wrapper>
  );
};

export default RelatedProducts;
