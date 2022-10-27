import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Wrapper } from "./styles";
import Temp from "../../../../assets/temp.jpg";
import Image from "next/image";
import { BuyButton } from "../../../../common/Button";

interface CardProps {
  price: number;
  setTotal: Dispatch<SetStateAction<number>>;
}

const CartItem: React.FC<CardProps> = ({ price, setTotal }) => {
  // 더미데이터
  const [count, setCount] = useState(1);
  const [nowPrice, setNowPrice] = useState(price * count);

  useEffect(() => {
    setTotal(val => val + count * price);
  }, []);
  useEffect(() => {
    setNowPrice(price * count);
  }, [count, nowPrice]);

  const onCountHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const handler = (event.target as HTMLElement).innerText;
    switch (handler) {
      case "+":
        setCount(val => val + 1);
        setTotal(val => val + price);
        break;

      case "-":
        setCount(val => (count > 1 ? val - 1 : val));
        setTotal(val => val - price);

        break;
    }
  };

  return (
    <Wrapper>
      <div className="grid-left">
        <Image src={Temp} objectFit="cover" />
      </div>
      <div className="grid-center">
        <h2>몬스테라</h2>
        <div className="count">
          <div onClick={onCountHandler} className="handler">
            +
          </div>
          <div className="now-cnt">{count}</div>
          <div onClick={onCountHandler} className="handler">
            -
          </div>
        </div>
      </div>
      <div className="grid-right">
        <h2>₩ {nowPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
      </div>
    </Wrapper>
  );
};

export default CartItem;
