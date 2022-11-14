import { NextPage } from "next";
import Link from "next/link";
import { useSelector } from "react-redux";
import { PriceButtonStyle } from "../../../common/Button/styles";
import SmartPotCard from "../../../common/Cards/SmartPotCard";
import CartList from "../../../components/commerce/cart/CartList";
import { StoreState } from "../../../store";
import { Wrapper } from "../../../styles/commerce/cart/styles";

const Cart: NextPage = () => {
  const selector = useSelector((state: StoreState) => state.cartList);
  return (
    <Wrapper>
      {selector.length > 0 ? (
        <>
          <h1>My Cart</h1>
          <CartList />

          <div className="button-wrap">
            <Link href={"/commerce/order/order-form"}>
              <div className="shop">CHECKOUT</div>
            </Link>
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

      <div className="card-wrap">
        <SmartPotCard price={36000} />
      </div>
    </Wrapper>
  );
};

export default Cart;
