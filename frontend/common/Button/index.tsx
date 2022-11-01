import Link from "next/link";
import React from "react";
import {
  Button,
  BuyListButtonStyle,
  CancelButtonStyle,
  PriceButtonStyle,
  PriceTextButtonStyle,
  SubmitButtonStyle,
  SearchButtonStyle,
  LoginButtonStyle,
  StatusButtonStyle,
} from "./styles";

import RightUp from "../../assets/commerce/right-up.svg";
import Bag from "../../assets/commerce/bag.svg";
import { useRouter } from "next/router";
import humidity from "../../assets/icon/humidity.png";
import soil from "../../assets/icon/soil.png";
import illuminance from "../../assets/icon/illuminance.png";
import temperature from "../../assets/icon/temperature.png";
import Image from "next/image";

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

export const SearchBtn: React.FC<{
  children: string;
  color: string;
  path: string;
}> = ({ children, color, path }) => {
  return (
    <Link href={path}>
      <SearchButtonStyle color={color}>{children}</SearchButtonStyle>
    </Link>
  );
};

// 컨벤션 다름! Btn vs Button 중에 선택해야 할듯

export const BuyTextButton: React.FC = () => {
  return (
    <PriceTextButtonStyle>
      <h3>Buy</h3>
      <RightUp />
    </PriceTextButtonStyle>
  );
};

export const BuyButton: React.FC<{ width: string }> = ({ width }) => {
  return (
    <PriceButtonStyle width="250px">
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
  const router = useRouter();
  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    router.back();
  };

  return (
    <CancelButtonStyle type="button" onClick={onClickHandler}>
      {children}
    </CancelButtonStyle>
  );
};

export const LoginButton: React.FC<{
  path: string;
}> = ({ path }) => {
  return (
    <Link href={path}>
      <LoginButtonStyle>로그인 없이 둘러보기</LoginButtonStyle>
    </Link>
  );
};

export const StatusButton: React.FC<{
  statusCode: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}> = ({ statusCode, activeIndex, setActiveIndex }) => {
  const status = [
    { src: temperature.src, title: "온도" },
    { src: illuminance.src, title: "조도" },
    { src: humidity.src, title: "습도" },
    { src: soil.src, title: "토양습도" },
  ];

  const onChangeActiveHandler = () => {
    setActiveIndex(statusCode);
  };

  return (
    <StatusButtonStyle
      onClick={onChangeActiveHandler}
      isActive={statusCode === activeIndex}
    >
      <Image
        src={status[statusCode].src}
        // layout="fill"
        width={"40px"}
        height={"40px"}
        alt="상태 아이콘"
      />

      <span>{status[statusCode].title}</span>
    </StatusButtonStyle>
  );
};
