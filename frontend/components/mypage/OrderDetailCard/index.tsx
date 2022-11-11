import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ItemListType } from "../DeliveryCard/Index";

interface Props {
  data: ItemListType;
}

const OrderDetailCard: FC<Props> = ({ data }) => {
  return (
    <div>
      <Image src={data.itemPicture} width="100%" height={"100%"} />
      {data.itemName}
      {data.itemEnName}
      {data.itemPrice}
      <Link href={`/commerce/product/${data.itemSeq}`}>상세보기</Link>
    </div>
  );
};

export default OrderDetailCard;
