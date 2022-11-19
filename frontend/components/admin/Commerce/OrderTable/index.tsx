import { useEffect, useState } from "react";
import { getAdminOrderList } from "../../../../apis/admin";
import OrderList from "./OrderList";
import { Wrapper } from "./styles";

export interface OrderArray {
  index: number;
  item: string[];
  orderSeq: number;
  orderName: string;
  orderUserName: string;
  orderStatus: string;
  orderPhone: string;
  orderAddress: string;
}

const CommerceTable: React.FC<{ data: OrderArray[] }> = ({ data }) => {
  return (
    <Wrapper>
      <>
        <div className=" ">
          <h3 className="title">Order Table</h3>
          <hr />
          <table className="table">
            <thead>
              <tr className="tr">
                <th className="">Seq</th>
                <th className="order">Product</th>
                <th className="name">Name</th>
                <th className="phone">Phone</th>
                <th className="address">Address</th>
                <th className="">Status</th>
              </tr>
            </thead>
            <div className="table-head">
              <hr />
            </div>
            {data &&
              data.map(item => {
                return <OrderList key={item.index} item={item}></OrderList>;
              })}
          </table>
        </div>
      </>
    </Wrapper>
  );
};

export default CommerceTable;
