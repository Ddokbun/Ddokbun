import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";

import { getCookie, CookieValueTypes, deleteCookie } from "cookies-next";
import Carousel from "../../../../common/Carousel";
import { Wrapper } from "../../../../styles/commerce/order/complete/styles";

import { approveKakaoPay } from "../../../../apis/commerce";

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  const tid = getCookie("tid", { req, res });
  if (!tid) {
    return {
      redirect: {
        destination: "/commerce/order/cancled",
      },
      props: {},
    };
  }
  const pgToken = query.pg_token as string;
  const payResult = await approveKakaoPay(tid, pgToken);
  deleteCookie("tid", { req, res });
  const payObj = {
    orderId: payResult?.aid,
    User: payResult?.partner_user_id,
  };
  // 결제정보를 DB에 입력하도록 해야함
  console.log(payResult);

  return { props: { payObj } };
};

interface OrderProps {
  orderId: string;
  User: string;
}

interface IOrder {
  payObj: OrderProps;
}

const Complete: NextPage<IOrder> = ({ payObj }) => {
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
              <span>{payObj.orderId}</span>
            </li>
            <li>
              <span>주문자 : </span>
              <span>{payObj.User}</span>
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
          <Link href={"/commerce"}>
            <div className="button">다른 상품 보러가기</div>
          </Link>
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
