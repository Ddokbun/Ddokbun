import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartList } from "../../../../apis/commerce";
import { setCartLists } from "../../../../store/commerce";
import { ProductLists } from "../../../../types/commerce/list.interface";

import CartItem from "../CartItem";
import { Wrapper } from "./styles";
import { StoreState } from "../../../../store";

const CartList: React.FC = () => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const selector = useSelector((state: StoreState) => state.cartList);
  useEffect(() => {
    const getCartList = async () => {
      const data = await fetchCartList();
      console.log(data?.data.content);

      dispatch(setCartLists(data?.data.content.data as ProductLists));
    };
    getCartList();
  }, []);
  console.log(selector);

  console.log(Object.keys(selector));

  return (
    <>
      <Wrapper>
        <div className="grid">
          <>
            {Object.keys(selector).map((idx: string) => {
              console.log(selector[parseInt(idx)]);
              const item = selector[parseInt(idx)];
              return (
                <CartItem key={item.itemSeq} item={item} setTotal={setTotal} />
              );
            })}
          </>
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
