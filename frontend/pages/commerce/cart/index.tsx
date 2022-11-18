import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PriceButtonStyle } from "../../../common/Button/styles";
import SmartPotCard from "../../../common/Cards/SmartPotCard";
import CartList from "../../../components/commerce/cart/CartList";
import { StoreState } from "../../../store";
import { setAllCartLists, setAllOrderLists } from "../../../store/commerce";
import { Wrapper } from "../../../styles/commerce/cart/styles";

const Cart: NextPage = () => {
  const selector = useSelector((state: StoreState) => state.cartList);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isCart, setIsCart] = useState(false);

  const setOrderList = () => {
    dispatch(setAllOrderLists(selector));
    router.push("/commerce/order/order-form");
  };
  useEffect(() => {
    selector.forEach(item => {
      if (item) {
        setIsCart(true);
      }
    });
  }, [selector]);

  return (
    <Wrapper>
      <div className="carts">
        {isCart ? (
          <>
            <h1>My Cart</h1>
            <CartList />

            <div className="button-wrap">
              <div className="shop" onClick={setOrderList}>
                CHECKOUT
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="alert">
              <h3>장바구니가 비었습니다.</h3>
              <Link href={"/commerce"}>
                <div className="shop">Continue shopping</div>
              </Link>
            </div>
          </>
        )}
      </div>

      <div className="card-wrap">
        <SmartPotCard price={36000} />
      </div>
    </Wrapper>
  );
};

export default Cart;
