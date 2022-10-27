import React from "react";
import { GridWrapper } from "./styles";

import ProductCard from "../../../../common/Cards/ProductCard";

const ProductList: React.FC = () => {
  return (
    <GridWrapper>
      <ProductCard isResponsive={true} price={10000} />
      <ProductCard isResponsive={true} price={10000} />
      <ProductCard isResponsive={true} price={10000} />
    </GridWrapper>
  );
};

export default ProductList;
