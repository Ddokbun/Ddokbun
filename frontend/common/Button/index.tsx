import Link from "next/link";
import React from "react";
import { Button, PriceButtonStyle, PriceTextButtonStyle } from "./styles";

import RightUp from "../../assets/right-up.svg";

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
