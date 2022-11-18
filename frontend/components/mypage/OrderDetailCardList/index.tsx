import { FC } from "react";
import { ItemListType } from "../DeliveryCard/Index";
import OrderDetailCard from "../OrderDetailCard";

interface Props {
  data: ItemListType[];
}

const OrderDetailCardList: FC<Props> = ({ data }) => {
  const details = data.map(item => {
    return <OrderDetailCard data={item} />;
  });

  return <div>{details}</div>;
};

export default OrderDetailCardList;
