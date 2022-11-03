import React from "react";
import { GridWrapper } from "./styles";

import ProductCard from "../../../../common/Cards/ProductCard";
import { ListArray } from "../../../../types/commerce/list.interface";

const ProductList: React.FC<{ data: ListArray }> = ({ data }) => {
  return (
    <GridWrapper>
      <>
        {data.map(item => {
          return (
            <ProductCard key={item.itemSeq} item={item} isResponsive={true} />
          );
        })}
      </>
    </GridWrapper>
  );
};

export default ProductList;
