import React from "react";
import { ResponsiveWrapper, Wrapper } from "./styles";

import Temp from "../../../assets/temp2.png";
import Image from "next/image";
import ProductLabel from "../../Labels/ProductsLabel";
import { BuyTextButton } from "../../Button";

interface CardProps {
  price: number;
  isResponsive: boolean;
}

const ProductCard: React.FC<CardProps> = ({ price, isResponsive }) => {
  return (
    <>
      {isResponsive ? (
        <ResponsiveWrapper>
          <div className="img-wrap">
            <Image
              objectFit="contain"
              src={Temp}
              layout="responsive"
              alt="임시상품이미지"
            />
          </div>
          <div className="text-wrap">
            <div className="title">
              <h2>임시상품명</h2>
              <h3>Swiss Chress</h3>
            </div>
            <ProductLabel>초보집사</ProductLabel>
            <h3>₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
            <BuyTextButton />
          </div>
        </ResponsiveWrapper>
      ) : (
        <Wrapper>
          <div className="img-wrap">
            <Image
              objectFit="contain"
              src={Temp}
              layout="responsive"
              alt="임시상품이미지"
            />
          </div>
          <div className="text-wrap">
            <div className="title">
              <h2>임시상품명</h2>
              <h3>Swiss Chress</h3>
            </div>
            <ProductLabel>초보집사</ProductLabel>
            <h3>₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
            <BuyTextButton />
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default ProductCard;
