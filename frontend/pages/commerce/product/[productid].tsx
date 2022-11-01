import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../../styles/commerce/products/[product-id]/style";
import ProductSellCard from "../../../common/Cards/ProductSellCard";
import ProductSummary from "../../../components/commerce/products/[product-id]/ProductSummary";
import ProductCare from "../../../components/commerce/products/[product-id]/ProductCare";
import RelatedProducts from "../../../components/commerce/products/[product-id]/RelatedProducts";
import { ParsedUrlQuery } from "querystring";
import { fetchProductDetail } from "../../../apis/commerce";

interface IParams extends ParsedUrlQuery {
  productid: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: string[] = ["0"];
  const paths = arr.map(productid => {
    return {
      params: { productid },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { productid } = context.params as IParams;

  const data = await fetchProductDetail(productid);
  console.log(data);

  console.log("-------------------------------");

  return {
    props: {
      plz: "제발",
    },
  };
};

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
