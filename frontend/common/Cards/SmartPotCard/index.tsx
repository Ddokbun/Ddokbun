import React from "react";
import { Wrapper } from "./styles";
import Pot from "../../../assets/commerce/pot.jpg";
import Image from "next/image";
import { putCart } from "../../../apis/commerce";
import { setCartLists } from "../../../store/commerce";
import { useDispatch } from "react-redux";

interface SmartPotProps {
  price: number;
}
const SmartPotCard: React.FC<SmartPotProps> = ({ price }) => {
  const dispatch = useDispatch();
  const putCartHandler = async () => {
    const res = await putCart(0);

    if (res.code === 200) {
      dispatch(setCartLists(res.content));
    }
  };

  return (
    <Wrapper>
      <h2>Smart Flower Pot</h2>
      <div className="img-wrap">
        <Image
          layout="fill"
          objectFit="contain"
          src={Pot}
          alt="임시 스마트화분 이미지입니다"
        />
      </div>
      <h4>Premium Smart Flower Pot</h4>
      <p>₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      <div className="smart-pot-btn">
        <span onClick={putCartHandler}>ADD TO CART</span>
      </div>
    </Wrapper>
  );
};

export default SmartPotCard;
