import Image from "next/image";
import React from "react";
import { NextPage } from "next";
import { Wrapper } from "../../../../styles/commerce/products/[product-id]/style";
import ProductSellCard from "../../../../common/Cards/ProductSellCard";

const Product: NextPage = () => {
  return (
    <Wrapper>
      <ProductSellCard price={18000} />
      <div className="contents"></div>
    </Wrapper>
  );
};

export default Product;
