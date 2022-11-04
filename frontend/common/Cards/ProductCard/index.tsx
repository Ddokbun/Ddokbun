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
  console.log(item);

  return (
    <>
      {isResponsive ? (
        <>
          <Link href={`/commerce/product/${item?.itemSeq}`}>
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
                <div className="tag-wrap">
                  {item.tags.map((tag, idx) => {
                    return <ProductLabel key={idx}>{tag}</ProductLabel>;
                  })}
                </div>
                <h3>
                  ₩{" "}
                  {item.itemPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </h3>
                <BuyTextButton id={item.itemSeq} />
              </div>
            </ResponsiveWrapper>
          </Link>
        </>
      ) : (
        <Link href={`/commerce/product/${item?.itemSeq}`}>
          <Wrapper variants={CardHover} whileHover="hover">
            <div className="img-wrap">
              <Image
                src={item?.itemImage}
                objectFit="contain"
                layout="fill"
                alt="임시상품이미지"
              />
            </div>
            <div className="text-wrap">
              <div className="title">
                <h2>{item?.itemName}</h2>
                <h3>{item?.itemEnName}</h3>
              </div>
              <div className="tag-wrap">
                {item?.tags.map((tag, idx) => {
                  return <ProductLabel key={idx}>{tag}</ProductLabel>;
                })}
              </div>
              <h3>
                ₩{" "}
                {item?.itemPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h3>
              <BuyTextButton id={item?.itemSeq} />
            </div>
          </Wrapper>
        </Link>
      )}
    </>
  );
};

export default ProductCard;
