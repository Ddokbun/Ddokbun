import React from "react";
import { GridWrapper } from "./styles";

import ProductCard from "../../../../common/Cards/ProductCard";

const ProductList: React.FC = () => {
  return (
    <GridWrapper>
      <ProductCard price={10000} />
      <ProductCard price={10000} />
      <ProductCard price={10000} />
    </GridWrapper>
  );
};

export default ProductList;
