import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartList } from "../../../../apis/commerce";
import { setAllCartLists } from "../../../../store/commerce";

import CartItem from "../CartItem";
import { Wrapper } from "./styles";
import { StoreState } from "../../../../store";

interface Item {
  setOrderTotal?: Dispatch<SetStateAction<number>>;
}

const CartList: React.FC<Item> = ({ setOrderTotal }) => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const selector = useSelector((state: StoreState) => state.cartList);

  useEffect(() => {
    let temp = 0;
    selector.forEach(item => {
      if (item) {
        temp += (item.price as number) * (item.quantity as number);
      }
    });
    setTotal(temp);
    if (setOrderTotal) {
      setOrderTotal(temp);
    }
  }, [selector]);

  useEffect(() => {
    const getCartList = async () => {
      const data = await fetchCartList();
      dispatch(setAllCartLists(data));
    };
    getCartList();
  }, []);

  return (
    <>
      <Wrapper>
        <div className="grid">
          <>
            {selector.map(item => {
              return (
                <>
                  {item && (
                    <CartItem
                      key={item.itemSeq}
                      item={item}
                      setTotal={setTotal}
                    />
                  )}
                </>
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
