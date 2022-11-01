import { NextPage } from "next";
import React, { useState } from "react";
import { StatusButton, StatusType } from "../../../common/Button";
import PageTitle from "../../../common/PageTitle";
import SearchCardList from "../../../components/manage/add/search/SearchCardList";
import { Wrapper } from "../../../styles/mypage/[userseq]/styles";
import { Theme } from "../../../styles/theme";
import Manage from "../../manage";
import { DummyData } from "../../manage/add/search";

const MyPage: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const deliveryStatus: StatusType[] = [
    {
      statusCode: 0,
      title: "상품 준비",
      src: null,
    },
    {
      statusCode: 1,
      title: "배송중",
      src: null,
    },
    {
      statusCode: 2,
      title: "배송 완료",
      src: null,
    },
  ];

  const onFetchDeliveryHandler = (code: number) => {
    console.log("log");
  };

  const buttons = deliveryStatus.map(delivery => {
    return (
      <StatusButton
        status={delivery}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
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
      <PageTitle isBold isLink={false}>
        마이페이지
      </PageTitle>
      <div className="button-container">{buttons}</div>

      <div className="card-container">
        <SearchCardList data={DummyData} isDelivery />
      </div>
      <Manage />
    </Wrapper>
  );
};

export default MyPage;
