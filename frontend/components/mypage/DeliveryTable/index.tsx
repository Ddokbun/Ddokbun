import { useEffect, useState } from "react";
import { fetchDeliveries } from "../../../apis/commerce";
import { StatusButton } from "../../../common/Button";
import PageTitle from "../../../common/PageTitle";
import { OrderItemTypes } from "../../../pages/mypage/[userseq]";
import { Theme } from "../../../styles/theme";
import DeliveryCardList from "../DeliveryCardList";

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

const DeliveryTable = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [data, setData] = useState<OrderItemTypes[]>();
  const onFetchDeliveryHandler = (code: number) => {
    setActiveIndex(code);
  };
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

      setData(filteredData);
    };
    getInitialData();
  }, [activeIndex]);
  return (
    <>
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
    </>
  );
};

export default DeliveryTable;
