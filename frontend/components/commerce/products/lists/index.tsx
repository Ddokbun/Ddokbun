import React from "react";
import { GridWrapper } from "./styles";

import ProductCard from "../../../../common/Cards/ProductCard";
import { ListArray } from "../../../../types/commerce/list.interface";

const ProductList: React.FC<{ data: ListArray }> = ({ data }) => {
  console.log(data);

  return (
    <GridWrapper>
      <p className="p-title">total : {data.length} </p>
      <div className="grid">
        <>
          {data.map(item => {
            return (
              <ProductCard key={item.itemSeq} item={item} isResponsive={true} />
            );
          })}
        </>
      </div>
    </GridWrapper>
  );
};

export default ProductList;
