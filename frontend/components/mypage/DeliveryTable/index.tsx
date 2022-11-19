import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { fetchDeliveries } from "../../../apis/commerce";
import { StatusButton } from "../../../common/Button";
import PageTitle from "../../../common/PageTitle";
import { OrderItemTypes } from "../../../pages/mypage/[userseq]";
import { authActions } from "../../../store/auth";
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

  const router = useRouter();
  const dispatch = useDispatch();

  const onLogoutHandler = async () => {
    Swal.fire({
      title: "로그아웃 하시겠어요?",
      showCancelButton: true,
      confirmButtonText: "네",
      cancelButtonText: "아니요",
    }).then(result => {
      if (result.isConfirmed) {
        deleteCookie("token");
        dispatch(authActions.setUserInfo({ accessToken: null, userSeq: null }));
        router.push("/welcome");
      }
    });
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
          <div className="title-container">
            <h1>Order List</h1>
            <button onClick={onLogoutHandler} className="logout">
              로그아웃
            </button>
          </div>
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
