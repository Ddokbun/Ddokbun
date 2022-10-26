import Image from "next/image";
import React from "react";
import { Wrapper } from "./styles";
import Temp from "../../../assets/temp2.png";
import ProductLabel from "../../Labels/ProductsLabel";
import { BuyButton, BuyListButton } from "../../Button";

interface ProductInfo {
  price: number;
}

const ProductSellCard: React.FC<ProductInfo> = ({ price }) => {
  return (
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
        <div className="text-top">
          <h3>Swiss Chress</h3>
          <h2>임시상품명</h2>
          <ProductLabel>초보집사</ProductLabel>
        </div>
        <h3>₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
        <div className="button-wrap">
          <BuyButton />
          <BuyListButton />
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductSellCard;
