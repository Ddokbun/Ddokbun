import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  NextPage,
} from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { getCookie, deleteCookie, setCookie } from "cookies-next";
import Carousel from "../../../../common/Carousel";
import { Wrapper } from "../../../../styles/commerce/order/complete/styles";

import {
  approveKakaoPay,
  fetchOrderInfo,
  fetchPriorityProduct,
  fetchRelatedProducts,
  setOrderInfo,
} from "../../../../apis/commerce";

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  const tid = getCookie("tid", { req, res });
  const orderSeq = getCookie("orderSeq", { req, res });
  const token = getCookie("token", { req, res });

  if (!tid) {
    return {
      redirect: {
        destination: "/commerce/order/cancled",
      },
      props: {},
    };
  }
  const pgToken = query.pg_token as string;
  const payResult = await approveKakaoPay(orderSeq as string, tid, pgToken);

  // deleteCookie("tid", { req, res });
  // deleteCookie("orderSeq", { req, res });

  const status = await setOrderInfo(orderSeq as string);
  const data = await fetchOrderInfo(orderSeq as string, token as string);

  // console.log("hre", status);

  const payObj = {
    orderSeq: data.orderSeq,
    orderUserName: data.orderUserName,
    orderAddress: data.orderAddress,
    firstItemIdx: data.itemlist[0].itemSeq,
  };
  // 결제정보를 DB에 입력하도록 해야함

  return {
    props: { payObj },
  };
};

interface OrderProps {
  orderSeq: string;
  orderUserName: string;
  orderAddress: string;
  firstItemIdx: string;
}

interface IOrder {
  payObj: OrderProps;
}

const Complete: NextPage<IOrder> = ({ payObj }) => {
  const [relatedList, setRelatedList] = useState([]);
  useEffect(() => {
    const getRelatedList = async () => {
      const data = await fetchRelatedProducts(payObj.firstItemIdx);
      setRelatedList(data.content);
    };
    getRelatedList();
  }, []);

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
              <span>{payObj.orderSeq}</span>
            </li>
            <li>
              <span>주문자 : </span>
              <span>{payObj.orderUserName}</span>
            </li>
            <li>
              <span>배송지 : </span>
              <span>{payObj.orderAddress}</span>
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
        <Carousel items={relatedList} />
      </div>
    </Wrapper>
  );
};

export default Complete;
