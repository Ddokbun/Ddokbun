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
  const [active, setActive] = useState<string>("");

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
          <td className="order">{item.orderName}</td>
          <td className="name">{item.orderUserName}</td>
          <td className="phone">{item.orderPhone}</td>
          <td className="address">{item.orderAddress}</td>
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
                      onClick={() => {
                        setAnswer([item.orderSeq, "ready"]);
                        setActive("ready");
                      }}
                      className={
                        "button-style" + (active == "ready" ? " active" : "")
                      }
                    >
                      ready
                    </button>
                    <button
                      onClick={() => {
                        setAnswer([item.orderSeq, "paycomplete"]);
                        setActive("paycomplete");
                      }}
                      className={
                        "button-style" +
                        (active == "paycomplete" ? " active" : "")
                      }
                    >
                      paycomplete
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setAnswer([item.orderSeq, "delivery"]);
                        setActive("delivery");
                      }}
                      className={
                        "button-style" + (active == "delivery" ? " active" : "")
                      }
                    >
                      delivery
                    </button>
                    <button
                      onClick={() => {
                        setAnswer([item.orderSeq, "complete"]);
                        setActive("complete");
                      }}
                      className={
                        "button-style" + (active == "complete" ? " active" : "")
                      }
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
        </tr>
      </tbody>
      <div className="table-head">
        <hr />
      </div>
    </>
  );
};

export default OrderList;
