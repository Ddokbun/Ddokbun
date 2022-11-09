import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { putOrderStatus } from "../../../../../apis/admin";
import { Wrapper } from "./styles";

export interface ProductArray {
  orderSeq: number;
  orderName: string;
  orderUserName: string;
  orderStatus: string;
  orderPhone: string;
  orderAddress: string;
}

export interface SetType {}

const OrderList: React.FC<{ item: ProductArray }> = ({ item }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [answer, setAnswer] = useState<(string | number)[]>([]);

  function openModal() {
    setIsOpen(true);
    console.log("모달열림");
  }
  function afterOpenModal() {
    console.log("모달 변경");
  }
  function closeModal() {
    putOrderStatus(answer);
    setIsOpen(false);
  }
  function cancleModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
    },
  };

  console.log(answer);
  return (
    <>
      <tbody>
        <tr>
          <td>{item.orderSeq}</td>
          <td>{item.orderName}</td>
          <td>{item.orderUserName}</td>
          <td>
            <button className="confirm-button" onClick={openModal}>
              {item.orderStatus}
            </button>
            <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
            >
              <Wrapper>
                <h2>주문 상태를 변경해주세요</h2>
                <div className="button-div">
                  <div>
                    <button
                      onClick={() => setAnswer([item.orderSeq, "ready"])}
                      className="button-style"
                    >
                      ready
                    </button>
                    <button
                      onClick={() => setAnswer([item.orderSeq, "paycomplete"])}
                      className="button-style"
                    >
                      paycomplete
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => setAnswer([item.orderSeq, "delivery"])}
                      className="button-style"
                    >
                      delivery
                    </button>
                    <button
                      onClick={() => setAnswer([item.orderSeq, "complete"])}
                      className="button-style"
                    >
                      complete
                    </button>
                  </div>
                </div>
                <div className="button-confirm">
                  <button className="confirm-button" onClick={closeModal}>
                    확인
                  </button>
                  <button className="confirm-button" onClick={cancleModal}>
                    취소
                  </button>
                </div>
              </Wrapper>
            </Modal>
          </td>
          <td>{item.orderPhone}</td>
          <td>{item.orderAddress}</td>
        </tr>
      </tbody>
      <div className="table-head">
        <hr />
      </div>
    </>
  );
};

export default OrderList;
