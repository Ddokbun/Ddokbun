import Image from "next/image";
import React from "react";
import { Wrapper } from "./styles";
import Temp from "../../../assets/temp.jpg";
import ProductLabel from "../../Labels/ProductsLabel";
import { BuyButton, BuyListButton } from "../../Button";
import { ItemObject } from "../../../types/commerce/detail.interface";

interface SellItemObject extends ItemObject {
  tags?: string[];
}

const ProductSellCard: React.FC<SellItemObject> = props => {
  return (
    <Wrapper>
      <div className="img-wrap">
        <Image
          objectFit="contain"
          layout="fill"
          src={props.itemPicture}
          alt="임시상품이미지"
        />
      </div>
      <div className="text-wrap">
        <div className="text-top">
          <h3>{props.itemEnName}</h3>
          <h2>{props.itemName}</h2>
        </div>

        <div className="tag-wrap">
          {props.tags?.map((tag, idx) => {
            return <ProductLabel key={idx}>{tag}</ProductLabel>;
          })}
        </div>

        <h3>
          ₩ {props.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </h3>
        <div className="button-wrap">
          <BuyButton id={props.itemSeq} />
          <BuyListButton id={props.itemSeq} />
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductSellCard;
