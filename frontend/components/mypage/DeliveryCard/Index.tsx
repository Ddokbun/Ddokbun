import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Wrapper } from "./styles";
import { OrderItemTypes } from "../../../pages/mypage/[userseq]";
import Modal from "../../../common/Modal";
import Delivery from "../Delivery";
import OrderDetailCardList from "../OrderDetailCardList";

interface Props {
  data: OrderItemTypes;
}

export interface ItemListType {
  itemEnName: string;
  itemName: string;
  itemPicture: string;
  itemPrice: number;
  itemSeq: number;
}

const DeliveryCard: FC<Props> = ({ data }) => {
  const orderedDate = data.orderTime.slice(0, 10);

  const [orderDetailData, setOrderDetailData] = useState<ItemListType[]>();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const showDeliveryStatus = () => {
    setModalTitle("배송 조회");
    setModalOpen(true);
  };

  const showOrderDetails = () => {
    setModalTitle("상품 조회");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const details = data.itemlist.map(item => item);
    setOrderDetailData(details);
  }, []);

  return (
    <Wrapper>
      {modalOpen && (
        <Modal title={modalTitle} onClose={closeModal}>
          {modalTitle === "배송 조회" ? (
            <Delivery
              orderReciver={data.orderReciver}
              orderWaybillNumber={data.orderWaybillNumber}
              orderStatus={data.orderStatus}
            />
          ) : (
            <OrderDetailCardList data={orderDetailData!} />
          )}
        </Modal>
      )}
      <div>
        <Image
          width={"100%"}
          height={"100%"}
          src={data.itemlist[0].itemPicture}
        />
      </div>
      <div className="infos">
        <p>{data.orderName}</p>
        <p>{data.orderPrice}원</p>
        <p>{orderedDate}</p>
        <div className="button-container">
          <button onClick={showDeliveryStatus}>배송조회</button>
          <button onClick={showOrderDetails}>상세보기</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default DeliveryCard;
