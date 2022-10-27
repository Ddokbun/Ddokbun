import React from "react";
import { NextPage } from "next";
import { Wrapper } from "../../../../styles/commerce/products/[product-id]/style";
import ProductSellCard from "../../../../common/Cards/ProductSellCard";
import ProductSummary from "../../../../components/commerce/products/[product-id]/ProductSummary";
import ProductCare from "../../../../components/commerce/products/[product-id]/ProductCare";
import RelatedProducts from "../../../../components/commerce/products/[product-id]/RelatedProducts";

const Product: NextPage = () => {
  return (
    <Wrapper>
      <ProductSellCard price={18000} />
      <ProductSummary></ProductSummary>
      <ProductCare></ProductCare>
      <RelatedProducts></RelatedProducts>
    </Wrapper>
  );
};

export default Product;
