import Link from "next/link";
import React from "react";
import {
  Button,
  BuyListButtonStyle,
  CancelButtonStyle,
  PriceButtonStyle,
  PriceTextButtonStyle,
  SubmitButtonStyle,
} from "./styles";

import RightUp from "../../assets/right-up.svg";
import Bag from "../../assets/Bag.svg";

export const TextBtn: React.FC<{
  children: string;
  color: string;
  path: string;
}> = ({ children, color, path }) => {
  return (
    <Link href={path}>
      <Button color={color}>{children}</Button>
    </Link>
  );
};

export const BuyTextButton: React.FC = () => {
  return (
    <PriceTextButtonStyle>
      <h3>Buy</h3>
      <RightUp />
    </PriceTextButtonStyle>
  );
};

export const BuyButton: React.FC = () => {
  return (
    <PriceButtonStyle>
      <h3>Buy Now</h3>
    </PriceButtonStyle>
  );
};

export const BuyListButton: React.FC = () => {
  return (
    <BuyListButtonStyle>
      <Bag className="bag" />
    </BuyListButtonStyle>
  );
};

// 추후 api로 이동
export interface Register {
  potSerial: string;
  plantNickname: string;
  waterSupply: string;
  plantSeq: string;
}

export const SubmitButton: React.FC<{
  children: string;
  onRegisterHandler: () => void;
}> = ({ children, onRegisterHandler }) => {
  const onSubmitHandler = (event: React.FormEvent) => {
    event?.preventDefault();
    onRegisterHandler();
  };

  return (
    <SubmitButtonStyle onClick={onSubmitHandler} type="submit">
      {children}
    </SubmitButtonStyle>
  );
};

export const CancelButton: React.FC<{
  children: string;
}> = ({ children }) => {
  return <CancelButtonStyle>{children}</CancelButtonStyle>;
};
