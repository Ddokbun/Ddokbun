import React from "react";
import { DeliveryLine, Wrapper } from "./styles";
import Call from "../../../assets/icon/call.svg";
import Dot from "../../../assets/icon/dot.svg";

const Delivery: React.FC = () => {
  return (
    <Wrapper>
      <div className="delivery-num">
        <span>운송장 번호 : </span>
        <span>12345678</span>
      </div>
      <div className="button-wrap">
        <button className="button">
          <span>
            <Call />
          </span>
          <span>채리통운</span>
        </button>
        <button className="button">
          <span>
            <Call />
          </span>
          <span>배송기사</span>
        </button>
      </div>
      <div className="delivery-line">
        <DeliveryLine now={true}>
          <span>
            <Dot />
          </span>
          <span>싸피 구미사업장</span>
        </DeliveryLine>
        <DeliveryLine now={false}>
          <span>
            <Dot />
          </span>
          <span>싸피 구미사업장</span>
        </DeliveryLine>
        <DeliveryLine now={false}>
          <span>
            <Dot />
          </span>
          <span>싸피 구미사업장</span>
        </DeliveryLine>
        <DeliveryLine now={false}>
          <span>
            <Dot />
          </span>
          <span>싸피 구미사업장</span>
        </DeliveryLine>
      </div>
    </Wrapper>
  );
};

export default Delivery;
