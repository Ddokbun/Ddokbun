import Image from "next/image";
import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../../styles/commerce/products/list/styles";
import Temp from "../../../assets/temp.jpg";
import ProductList from "../../../components/commerce/products/lists";
import { ParsedUrlQuery } from "querystring";
import { fetchProductList } from "../../../apis/commerce";
import {
  ListArray,
  ListObjectItem,
} from "../../../types/commerce/list.interface";

interface IParams extends ParsedUrlQuery {
  params: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: string[] = ["초보집사", "집꾸미기", "반려동물", "공기정화"];
  const paths = arr.map(params => {
    return {
      params: { params },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context.params as IParams;
  const data = await fetchProductList(params);
  console.log(data);

  return {
    props: {
      data,
    },
  };
};

const ProductLists: NextPage<{ data: ListArray }> = ({ data }) => {
  return (
    <Wrapper>
      <div className="banner-wrap">
        <Image src={Temp} alt="임시배너이미지입니다" />
      </div>
      <ProductList data={data.slice(0, 6)} />;
    </Wrapper>
  );
};

export default ProductLists;
