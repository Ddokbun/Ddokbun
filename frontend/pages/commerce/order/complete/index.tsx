import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Carousel from "../../../../common/Carousel";
import { Wrapper } from "../../../../styles/commerce/order/complete/styles";

const Complete: NextPage = () => {
  return (
    <Wrapper>
      <div className="grid">
        <div className="grid-top">
          <h1>주문이 완료됐습니다</h1>
        </div>
        <div className="grid-middle">
          <ul>
            <li>
              <span>주문번호 : </span>
              <span>12345678</span>
            </li>
            <li>
              <span>주문자 : </span>
              <span>허건녕</span>
            </li>
            <li>
              <span>배송지 : </span>
              <span>대구 수성구 수성못 근처</span>
            </li>
            <li>
              <Link href="#">
                <a href="">배송상태 보러가기</a>
              </Link>
            </li>
          </ul>
          <div className="button">다른 상품 보러가기</div>
        </div>
      </div>
      <div className="carousel-wrap">
        <h1>Other Plants</h1>
        <Carousel />
      </div>
    </Wrapper>
  );
};

export default Complete;
