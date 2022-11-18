import { getCookie } from "cookies-next";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserSeq } from "../../../apis/auth";
import { fetchDeliveries } from "../../../apis/commerce";
import { StatusButton } from "../../../common/Button";
import PageTitle from "../../../common/PageTitle";
import DeliveryCardList from "../../../components/mypage/DeliveryCardList";
import { RootState } from "../../../store";
import { ManageHomeAni } from "../../../styles/animations/animation";
import { Wrapper } from "../../../styles/mypage/[userseq]/styles";
import { Theme } from "../../../styles/theme";
import { checkAuthentication } from "../../../utils/protectedRouter";
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
    title: "결제대기",
    src: null,
    status: "READY",
  },
  {
    statusCode: 1,
    title: "상품준비",
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
  const userseq = useSelector((state: RootState) => state.authSlice.userSeq);
  const router = useRouter();

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
    <Wrapper variants={ManageHomeAni} initial="out" animate="in" exit="out">
      <PageTitle mypage isLink={false}>
        <div>
          <h1>Order List</h1>
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

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  
  const isAuthenticated = await checkAuthentication(query, req, res);
  if (isAuthenticated) {
    return {
      props: {},
    };
  } else {
    return {
      redirect: {
        destination: "/commerce",
      },
      props: {},
    };
  }
};
