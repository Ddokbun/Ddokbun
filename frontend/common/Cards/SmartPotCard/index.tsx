import React from "react";
import { Wrapper } from "./styles";
import Temp from "../../../assets/smartpot.jpg";
import Image from "next/image";

interface SmartPotProps {
  price: number;
}

const SmartPotCard: React.FC<SmartPotProps> = ({ price }) => {
  return (
    <Wrapper>
      <h2>Smart Flower Pot</h2>
      <div className="img-wrap">
        <Image src={Temp} alt="임시 스마트화분 이미지입니다" />
      </div>
      <h4>Premium Smart Flower Pot</h4>
      <p>₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      <div className="smart-pot-btn">
        <span>ADD TO CART</span>
      </div>
    </Wrapper>
  );
};

export default SmartPotCard;
