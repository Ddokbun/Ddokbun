import Image from "next/image";
import React from "react";
import { NextPage } from "next";
import { Wrapper } from "./style";
import ProductSellCard from "../../../../common/Cards/ProductSellCard";

const Index: NextPage = () => {
  return (
    <Wrapper>
      <ProductSellCard price={18000} />
      <div className="contents"></div>
    </Wrapper>
  );
};

export default Index;
