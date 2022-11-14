import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { DeliveriesType, fetchDeliveries } from "../../../apis/commerce";
import { StatusButton } from "../../../common/Button";
import PageTitle from "../../../common/PageTitle";
import SearchCardList from "../../../components/manage/add/search/SearchCardList";
import DeliveryCardList from "../../../components/mypage/DeliveryCardList";
import { WrapperVar } from "../../../styles/animations/animation";
import { Line, Wrapper } from "../../../styles/mypage/[userseq]/styles";
import { Theme } from "../../../styles/theme";
import Manage from "../../manage/[userseq]";

interface DeliveryStatus {
  statusCode: number;
  title: string;
  src: null | string;
  status: string;
}

const deliveryStatus: DeliveryStatus[] = [
  {
    statusCode: 0,
    title: "결제 대기",
    src: null,
    status: "READY",
  },
  {
    statusCode: 1,
    title: "상품 준비",
    src: null,
    status: "PAYCOMPLETE",
  },
  {
    statusCode: 2,
    title: "배송중",
    src: null,
    status: "DELIVERY",
  },
  {
    statusCode: 3,
    title: "배송완료",
    src: null,
    status: "COMPLETE",
  },
];

export interface OrderItemTypes {
  itemSeqList: string;
  orderAddress: string;
  orderEmail: string;
  orderMethod: string;
  orderName: string;
  orderPhone: string;
  orderPrice: number;
  orderQuantity: number;
  orderReciver: string;
  orderSeq: number;
  orderStatus: string;
  orderTime: string;
  orderUserName: string;
  orderWaybillNumber: string;
  userSeq: number;
  itemlist: {
    itemEnName: string;
    itemName: string;
    itemPicture: string;
    itemPrice: number;
    itemSeq: number;
  }[];
}

const MyPage: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [data, setData] = useState<OrderItemTypes[]>();

  const onFetchDeliveryHandler = (code: number) => {
    setActiveIndex(code);
  };

  useEffect(() => {
    if (activeIndex == -1) {
      return;
    }

    const getInitialData = async () => {
      const res: OrderItemTypes[] = await fetchDeliveries();
      console.log(res);
      console.log(deliveryStatus[activeIndex].status);
      const filteredData = res.filter(item => {
        return item.orderStatus === deliveryStatus[activeIndex].status;
      });
      // const itemList = filteredData.map(item => {
      //   return item.itemlist;
      // });
      setData(filteredData);
    };
    getInitialData();
  }, [activeIndex]);

  const buttons = deliveryStatus.map(delivery => {
    return (
      <StatusButton
        status={delivery}
        activeIndex={activeIndex}
        key={delivery.statusCode}
        onClick={onFetchDeliveryHandler}
        backgroundColor={Theme.color.brown}
        backgroundHover={Theme.color.brownHover}
        textColor={"#cccccc"}
      />
    );
  });

  return (
    <Wrapper variants={WrapperVar}>
      <PageTitle mypage isLink={false}>
        <div>
          <h1>주문내역 조회</h1>
          <div className="button-container">{buttons}</div>
        </div>
      </PageTitle>
      <table>
        <thead>
          <tr>
            <th>상품정보</th>
            <th>주문일자</th>
            <th>주문번호</th>
            <th>주문금액(수량)</th>
          </tr>
        </thead>
        <tbody>{data && <DeliveryCardList data={data} />}</tbody>
      </table>

      <Manage />
    </Wrapper>
  );
};

export default MyPage;
