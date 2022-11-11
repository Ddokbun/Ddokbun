import Image from "next/image";
import { FC, useState } from "react";
import { Wrapper } from "./styles";
import { OrderItemTypes } from "../../../pages/mypage/[userseq]";
import Modal from "../../../common/Modal";
import Delivery from "../Delivery";

interface Props {
  data: OrderItemTypes;
}

const DeliveryCard: FC<Props> = ({ data }) => {
  const orderedDate = data.orderTime.slice(0, 10);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const showDeliveryStatus = () => {
    setModalTitle("배송 조회");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      {modalOpen && (
        <Modal title={modalTitle} onClose={closeModal}>
          <Delivery
            orderReciver={data.orderReciver}
            orderWaybillNumber={data.orderWaybillNumber}
            orderStatus={data.orderStatus}
          />
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
          <button>상세보기</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default DeliveryCard;
