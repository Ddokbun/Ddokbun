import React, { useRef, useState } from "react";
import { ResponsiveWrapper } from "./styles";
import { motion } from "framer-motion";

import Temp from "../../../assets/temp2.png";
import Image from "next/image";
import ProductLabel from "../../Labels/ProductsLabel";
import { BuyTextButton } from "../../Button";
import { ListObjectItem } from "../../../types/commerce/list.interface";
import { CardHover } from "../../../styles/animations/animation";
import Link from "next/link";
import { useInView } from "framer-motion";

const ProductCard: React.FC<{
  item: ListObjectItem;
  isResponsive: boolean;
}> = ({ item, isResponsive }) => {
  const ref = useRef(null);
  const [isHovered, setHovered] = useState(false);
  const isInView = useInView(ref, { once: true });

  const MouseHoverHandler = () => {
    setHovered(true);
  };
  const MouseLeaveHandler = () => {
    setHovered(false);
  };

  const None = {};

  return (
    <>
      <Link href={`/commerce/product/${item?.itemSeq}`}>
        <ResponsiveWrapper
          variants={isResponsive ? CardHover : None}
          ref={ref}
          initial="start"
          animate={isInView ? "end" : ""}
          onMouseEnter={MouseHoverHandler}
          onMouseLeave={MouseLeaveHandler}
        >
          <motion.div
            initial={false}
            animate={{ scale: isHovered ? 1.2 : 1 }}
            className="img-wrap"
          >
            <Image
              src={item.itemImage}
              objectFit="cover"
              layout="fill"
              alt="임시상품이미지"
            />
          </motion.div>
          <div className="text-wrap">
            <div className="title">
              <p>{item.itemEnName}</p>
              <h2>{item.itemName}</h2>
            </div>
            <h3>
              ₩{" "}
              {item.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h3>
          </div>
        </ResponsiveWrapper>
      </Link>
    </>
  );
};

export default ProductCard;
