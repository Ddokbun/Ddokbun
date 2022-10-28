import React, { useState } from "react";
import { BuyButton } from "../../../../common/Button";
import { PriceButtonStyle } from "../../../../common/Button/styles";
import CartItem from "../CartItem";
import { Wrapper } from "./styles";

const CartList: React.FC = () => {
  const [total, setTotal] = useState(0);
  const price = 18000;
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
        <div className="button-wrap">
          <PriceButtonStyle width="300px">
            <h3>CHECKOUT</h3>
          </PriceButtonStyle>
        </div>
      </Wrapper>
    </>
  );
};

export default CartList;
