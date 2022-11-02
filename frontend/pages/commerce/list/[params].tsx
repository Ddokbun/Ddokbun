import Image from "next/image";
import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../../styles/commerce/products/list/styles";
import Temp from "../../../assets/temp.jpg";
import ProductList from "../../../components/commerce/products/lists";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { fetchProductList } from "../../../apis/commerce";

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
  console.log(params);

  const data = await fetchProductList(params);
  console.log(data);

  return {
    props: {
      plz: "제발",
    },
  };
};

const ProductLists: NextPage = () => {
  const { params } = useRouter().query;

  return (
    <Wrapper>
      <div className="banner-wrap">
        <Image src={Temp} alt="임시배너이미지입니다" />
      </div>
      <ProductList />
    </Wrapper>
  );
};

export default ProductLists;
