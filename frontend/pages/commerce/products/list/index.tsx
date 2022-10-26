import Image from "next/image";
import React from "react";
import { NextPage } from "next";
import { Wrapper } from "../../../../styles/commerce/products/list/styles";
import Temp from "../../../../assets/temp.jpg";
import ProductList from "../../../../components/commerce/product-list/ProductList";

const Index: NextPage = () => {
  return (
    <Wrapper>
      <div className="banner-wrap">
        <Image src={Temp} alt="임시배너이미지입니다" />
      </div>
      <ProductList></ProductList>
    </Wrapper>
  );
};

export default Index;
