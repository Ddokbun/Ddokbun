import React from "react";
import { GridWrapper } from "./styles";

import ProductCard from "../../../../common/Cards/ProductCard";

const ProductList: React.FC = () => {
  return (
    <GridWrapper>
      <ProductCard isResponsive={true} price={10000} id={1} />
      <ProductCard isResponsive={true} price={10000} id={1} />
      <ProductCard isResponsive={true} price={10000} id={1} />
    </GridWrapper>
  );
};

export default ProductList;
