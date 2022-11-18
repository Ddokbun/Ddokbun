import React, { FC } from "react";
import { DeliveryLine, Wrapper } from "./styles";
import Call from "../../../assets/icon/call.svg";
import Dot from "../../../assets/icon/dot.svg";

interface Props {
  orderWaybillNumber: string;
  orderStatus: string;
  orderReciver: string;
}

const Delivery: FC<Props> = ({
  orderWaybillNumber,
  orderStatus,
  orderReciver,
}) => {
  return (
    <Wrapper>
      <div className="delivery-num">
        <span>운송장 번호 : </span>
        <span>{orderWaybillNumber}</span>
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
      {orderStatus === "COMPLETE" && (
        <div className="delivery-num">
          <span>수취인 : </span>
          <span>{orderReciver}</span>
        </div>
      )}
    </Wrapper>
  );
};

export default Delivery;
