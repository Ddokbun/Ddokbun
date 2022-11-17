import Image from "next/image";
import React from "react";
import { Wrapper } from "./styles";
import Temp from "../../../assets/temp.jpg";
import ProductLabel from "../../Labels/ProductsLabel";
import { BuyButton, BuyListButton } from "../../Button";
import { ItemObject } from "../../../types/commerce/detail.interface";
import ProductSummary from "../../../components/commerce/products/[product-id]/ProductSummary";

interface SellItemObject extends ItemObject {
  tags?: string[];
  originPlace?: string;
  plantZRName?: string;
  growthWidth?: number;
  growthHeight?: number;
}

const ProductSellCard: React.FC<SellItemObject> = props => {
  console.log(props);
  const data = {
    itemSeq: props.itemSeq,
    itemName: props.itemName,
    itemEnName: props.itemEnName,
    price: props.itemPrice,
    quantity: 1,
    imageUrl: props.itemPicture,
  };
  return (
    <Wrapper>
      <div className="img-wrap">
        <Image
          objectFit="contain"
          layout="fill"
          src={props.itemPicture}
          alt="상품이미지"
        />
      </div>
      <div className="text-wrap">
        <div className="text-top">
          <h2>{props.itemName}</h2>
          <h3>{props.itemEnName}</h3>
          <div className="tag-wrap">
            {props.tags?.map((tag, idx) => {
              return <ProductLabel key={idx}>{tag}</ProductLabel>;
            })}
          </div>
        </div>
        <h3>
          ₩ {props.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </h3>
        <ProductSummary
          originPlace={props.originPlace}
          plantZRName={props.plantZRName}
          growthWidth={props.growthWidth}
          growthHeight={props.growthHeight}
        />

        <div className="button-wrap">
          <BuyButton id={props.itemSeq} data={data} />
          <BuyListButton id={props.itemSeq} />
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductSellCard;
