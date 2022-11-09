import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { DeliveriesType, fetchDeliveries } from "../../../apis/commerce";
import { StatusButton } from "../../../common/Button";
import PageTitle from "../../../common/PageTitle";
import { Wrapper } from "../../../styles/mypage/[userseq]/styles";
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

const MyPage: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [data, setData] = useState<DeliveriesType[]>();

  const onFetchDeliveryHandler = (code: number) => {
    setActiveIndex(code);
  };

  // useEffect(() => {
  //   if (activeIndex == -1) {
  //     return;
  //   }

  //   const getInitialData = async () => {
  //     const res: DeliveriesType[] = await fetchDeliveries();
  //     const filteredData = res.filter(item => {
  //       item.orderStatus === deliveryStatus[activeIndex].status;
  //     });
  //     setData(filteredData);
  //   };
  //   getInitialData();
  // }, []);

  const buttons = deliveryStatus.map(delivery => {
    return (
      <StatusButton
        status={delivery}
        activeIndex={activeIndex}
        key={delivery.statusCode}
        onClick={onFetchDeliveryHandler}
        backgroundColor={Theme.color.brown}
        backgroundHover={Theme.color.brownHover}
        textColor={"white"}
      />
    );
  });

  return (
    <Wrapper>
      <PageTitle isLink={false}>마이페이지</PageTitle>
      <div className="button-container">{buttons}</div>

      <div className="card-container">
        {/* {data && <SearchCardList data={data} isDelivery />} */}
      </div>
      <Manage />
    </Wrapper>
  );
};

export default MyPage;
