import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../../styles/commerce/products/[product-id]/style";
import ProductSellCard from "../../../common/Cards/ProductSellCard";
import ProductSummary from "../../../components/commerce/products/[product-id]/ProductSummary";
import ProductCare from "../../../components/commerce/products/[product-id]/ProductCare";
import RelatedProducts from "../../../components/commerce/products/[product-id]/RelatedProducts";
import { ParsedUrlQuery } from "querystring";
import {
  fetchProductDetail,
  getAllProductNumber,
} from "../../../apis/commerce";

interface IParams {
  productid: number;
}
export const getStaticPaths: GetStaticPaths = async () => {
  const arr: IParams[] = await getAllProductNumber();

  const paths = arr.map(productid => {
    return {
      params: { productid: String(productid) },
    };
  });
  // const paths = [{ params: { productid: "0" } }];
  return {
    paths,
    fallback: false,
  };
};

interface IProps extends ParsedUrlQuery {
  productid: string;
}

export const getStaticProps: GetStaticProps = async context => {
  const { productid } = context.params as IProps;
  console.log(typeof productid);

  const data = await fetchProductDetail(productid);
  console.log(data);

  return {
    props: {
      data,
    },
  };
};

interface IPlant {
  plantSeq: number;
  plantName: string;
  plantNeName: string;
  plantZRName: string;
  distbName: string;
  originPlace: string;
  growthHeight: number;
  growthWidth: number;
  smellDesc: string;
  toxctyInfo: string;
  manageLevel: string;
  growthTemperature: string;
  winterTemperature: string;
  growthHumid: string;
  specManageInfo: string;
  adviseInfo: string;
  functionInfo: string;
  manageRequire: string;
  plantPlace: string;
  waterCycle: number;
  waterInfo: string;
  lightType: number;
  lightInfo: string;
  minTemperature: number;
  maxTemperature: number;
  temperatureInfo: string;
  imagePath: string;
  recRate: string;
}

interface IRootObject {
  itemSeq: number;
  itemName: string;
  itemPrice: number;
  itemInfo: string;
  itemStock: number;
  itemPicture: string;
  itemKind: number;
  plant: IPlant;
}

interface IdetailProps {
  data: IRootObject;
}

const Product: NextPage<IdetailProps> = ({ data }) => {
  console.log(data);

  return (
    <Wrapper>
      <ProductSellCard price={18000} id={0} />
      <ProductSummary></ProductSummary>
      <ProductCare></ProductCare>
      {/* <RelatedProducts></RelatedProducts> */}
    </Wrapper>
  );
};

export default Product;
