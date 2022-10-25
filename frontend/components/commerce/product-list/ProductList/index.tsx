import React from "react";
import { GridWrapper } from "./styles";

import ProductCard from "../../../../common/Cards/ProductCard";

const ProductList: React.FC = () => {
  return (
    <GridWrapper>
      <ProductCard price={"18000"} />
      <ProductCard price={"18000"} />
      <ProductCard price={"18000"} />
    </GridWrapper>
  );
};

export default ProductList;
