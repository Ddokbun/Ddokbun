import Image from "next/image";
import React from "react";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { Wrapper } from "../../../styles/commerce/products/list/styles";

import { ParsedUrlQuery } from "querystring";

import { ListArray } from "../../../types/commerce/list.interface";
import axios from "axios";
import { getCookie } from "cookies-next";
import { fetchProductList } from "../../../apis/commerce";

import Starter from "../../../assets/commerce/plants/starter-banner.jpg";
import Pet from "../../../assets/commerce/plants/pet-banner.jpg";
import Home from "../../../assets/commerce/plants/home-banner.jpg";
import Air from "../../../assets/commerce/plants/air-banner.jpg";
import ProductList from "../../../components/commerce/products/lists";

interface IParams extends ParsedUrlQuery {
  params: string;
}

interface Ibanner {
  title: string;
  contents: string;
  image: string;
}

const ProductLists: NextPage<{ data: ListArray; banner: Ibanner }> = ({
  data,
  banner,
}) => {
  console.log(banner);

  return (
    <Wrapper>
      <div className="banner-wrap">
        <div className="baener-text">
          <span>똑분 / {banner.image}</span>
          <h3>{banner.title}</h3>
          <div className="line"></div>
          <p>{banner.contents}</p>
        </div>
        <div className="baener-image">
          {banner.image === "초보집사" ? (
            <Image src={Starter} alt="임시배너이미지입니다" />
          ) : null}
          {banner.image === "집꾸미기" ? (
            <Image src={Home} alt="임시배너이미지입니다" />
          ) : null}
          {banner.image === "반려동물" ? (
            <Image src={Pet} alt="임시배너이미지입니다" />
          ) : null}
          {banner.image === "공기정화" ? (
            <Image src={Air} alt="임시배너이미지입니다" />
          ) : null}
        </div>
      </div>
      <ProductList data={data} />
    </Wrapper>
  );
};

export default ProductLists;

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

  const BannerTitle = {
    초보집사: {
      title: "Beginner",
      contents: "초보가드너를 위한 맞춤 식믈들로 식물키우기에 도전해보세요",
      image: "초보집사",
    },
    집꾸미기: {
      title: "Home Decoration",
      contents: "아름다운 식물들을 활용하여 집의 분위기를 한층 더 높여보세요",
      image: "집꾸미기",
    },
    반려동물: {
      title: "Gardening with Pets",
      contents: "반려동물에게 무해한 식물들과 함께 가드닝을 경험해보세요",
      image: "반려동물",
    },
    공기정화: {
      title: "Air Purifying Plants",
      contents: "가드닝과 함께 공기정화 효과를 누려보세요",
      image: "공기정화",
    },
  };

  const data = await fetchProductList(params);

  return {
    props: {
      banner: BannerTitle[params as keyof typeof BannerTitle],
      data,
    },
  };
};
