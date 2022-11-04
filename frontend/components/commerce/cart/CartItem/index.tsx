import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Wrapper } from "./styles";
import Temp from "../../../../assets/temp.jpg";
import Image from "next/image";
import { ListObjectItem } from "../../../../types/commerce/list.interface";

interface CartProps extends ListObjectItem {
  quantity: number;
  price: number;
  imageUrl: string;
}

const CartItem: React.FC<{
  item: ListObjectItem;
  setTotal: Dispatch<SetStateAction<number>>;
}> = ({ item, setTotal }) => {
  // 더미데이터
  const [count, setCount] = useState(1);
  const [nowPrice, setNowPrice] = useState((item.price as number) * count);

  useEffect(() => {
    setTotal(val => (val + (item.price as number)) * count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const fetchSetTotal = useCallback(() => {
  //   setTotal(val => val + count * price);
  // }, []);

  // useEffect(() => {
  //   fetchSetTotal();
  // }, [fetchSetTotal]);

  useEffect(() => {
    setNowPrice((item.price as number) * count);
  }, [item.price, count]);

  const onCountHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const handler = (event.target as HTMLElement).innerText;
    switch (handler) {
      case "+":
        setCount(val => val + 1);
        setTotal(val => val + (item.price as number));
        break;

      case "-":
        setCount(val => (count > 1 ? val - 1 : val));
        setTotal(val => val - (item.price as number));
        break;
    }
  };

  return (
    <Wrapper>
      <div className="grid-left">
        <Image src={item.imageUrl as string} layout="fill" objectFit="cover" />
      </div>
      <div className="grid-center">
        <h2>{item.itemName}</h2>
        <div className="count">
          <div onClick={onCountHandler} className="handler">
            +
          </div>
          <div className="now-cnt">{item.quantity}</div>
          <div onClick={onCountHandler} className="handler">
            -
          </div>
        </div>
      </div>
      <div className="grid-right">
        <h2>
          ₩{" "}
          {(item.price as number)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </h2>
      </div>
    </Wrapper>
  );
};

export default CartItem;
