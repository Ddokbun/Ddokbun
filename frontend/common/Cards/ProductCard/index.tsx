import React from "react";
import { Card } from "./styles";

import Temp from "../../../assets/Temp2.png";
import Image from "next/image";
import ProductLabel from "../../Labels/ProductsLabel";
import { PriceButtonStyle } from "../../Button/styles";
import { BuyButton } from "../../Button";

interface CardProps {
  price: string;
}

const ProductCard: React.FC<CardProps> = ({ price }) => {
  return (
    <Card>
      <div className="img_wrap">
        <Image
          objectFit="contain"
          src={Temp}
          layout="responsive"
          alt="임시상품이미지"
        />
      </div>
      <div className="text_wrap">
        <h2>임시상품명</h2>
        <h3>Swiss Chress</h3>
        <ProductLabel>초보집사</ProductLabel>
        <h3>₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
        <BuyButton />
      </div>
    </Card>
  );
};

export default ProductCard;
