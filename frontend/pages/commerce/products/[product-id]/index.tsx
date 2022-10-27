import Image from "next/image";
import React from "react";
import { NextPage } from "next";
import { Wrapper } from "../../../../styles/commerce/products/[product-id]/style";
import ProductSellCard from "../../../../common/Cards/ProductSellCard";
import ProductSummary from "../../../../components/commerce/products/[product-id]/ProductSummary";
import ProductCare from "../../../../components/commerce/products/[product-id]/ProductCare";
import Carousel from "../../../../common/Carousel";

const Product: NextPage = () => {
  return (
    <Wrapper>
      <ProductSellCard price={18000} />
      <ProductSummary></ProductSummary>
      <ProductCare></ProductCare>
      <Carousel></Carousel>
    </Wrapper>
  );
};

export default Product;
