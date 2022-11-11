import Image from "next/image";
import { FC } from "react";
import { Wrapper } from "./styles";
import { OrderItemTypes } from "../../../pages/mypage/[userseq]";
import DeliveryCard from "../DeliveryCard/Index";

interface Props {
  data: OrderItemTypes[];
}

const DeliveryCardList: FC<Props> = ({ data }) => {
  const DeliveryCards = data.map(DeliveryInfos => {
    return <DeliveryCard data={DeliveryInfos} />;
  });

  return <Wrapper>{DeliveryCards}</Wrapper>;
};

export default DeliveryCardList;
