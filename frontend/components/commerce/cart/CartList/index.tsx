import React, { useState } from "react";

import CartItem from "../CartItem";
import { Wrapper } from "./styles";

const CartList: React.FC = () => {
  const [total, setTotal] = useState(0);
  return (
    <>
      <Wrapper>
        <div className="grid">
          <CartItem price={18000} setTotal={setTotal} />
          <CartItem price={18000} setTotal={setTotal} />
        </div>
        <div className="subtotal">
          <div className="subtotal-left">
            <h3>SUBTOTAL</h3>
          </div>
          <div className="subtotal-right">
            <h3>₩ {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default CartList;
