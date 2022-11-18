import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ItemListType } from "../DeliveryCard/Index";
import { Wrapper } from "./styles";

interface Props {
  data: ItemListType;
}

const OrderDetailCard: FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <Image src={data.itemPicture} width="100%" height={"100%"} />
      <div className="info">
        <p className="kr-name">{data.itemName}</p>
        <p className="en-name">{data.itemEnName}</p>
        <p>{data.itemPrice}원</p>
      </div>
      <Link className="link" href={`/commerce/product/${data.itemSeq}`}>식물 상세 보기</Link>
    </Wrapper>
  );
};

export default OrderDetailCard;
