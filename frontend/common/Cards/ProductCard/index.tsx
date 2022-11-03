import React from "react";
import { ResponsiveWrapper, Wrapper } from "./styles";

import Temp from "../../../assets/temp2.png";
import Image from "next/image";
import ProductLabel from "../../Labels/ProductsLabel";
import { BuyTextButton } from "../../Button";
import { ListObjectItem } from "../../../types/commerce/list.interface";
import { CardHover } from "../../../styles/animations/animation";
import Link from "next/link";

const ProductCard: React.FC<{
  item: ListObjectItem;
  isResponsive: boolean;
}> = ({ item, isResponsive }) => {
  return (
    <>
      {isResponsive ? (
        <>
          <ResponsiveWrapper variants={CardHover} whileHover="hover">
            <div className="img-wrap">
              <Image
                src={item.itemImage}
                objectFit="contain"
                layout="fill"
                alt="임시상품이미지"
              />
            </div>
            <div className="text-wrap">
              <div className="title">
                <h2>{item.itemName}</h2>
                <h3>{item.itemEnName}</h3>
              </div>
              <ProductLabel>초보집사</ProductLabel>
              <h3>
                ₩{" "}
                {item.itemPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h3>
              <BuyTextButton id={item.itemSeq} />
            </div>
          </ResponsiveWrapper>
        </>
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
            <h3>
              ₩{" "}
              {item.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h3>
            <BuyTextButton id={item.itemSeq} />
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default ProductCard;
