import { Wrapper } from "./styles";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";

export interface OrderArray {
  index: number;
  item: string[];
}

const ProductTable: React.FC = ({ data }) => {
  return (
    <Wrapper>
      <>
        <div className=" ">
          <h3 className="title">Product Table</h3>
          <hr />
          <table className="table">
            <thead>
              <tr className="tr">
                <th className="">Num</th>
                <th className="">Name</th>
                <th className="">Price</th>
                <th className="">Stock</th>
                <th className="">Del</th>
              </tr>
            </thead>
            <div className="table-head">
              <hr />
            </div>
            {data &&
              data.map((item: OrderArray) => {
                return <ProductList key={item.index} item={item}></ProductList>;
              })}
          </table>
        </div>
      </>
    </Wrapper>
  );
};

export default ProductTable;
