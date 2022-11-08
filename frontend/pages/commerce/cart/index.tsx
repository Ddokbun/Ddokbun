import { NextPage } from "next";
import Link from "next/link";
import { PriceButtonStyle } from "../../../common/Button/styles";
import SmartPotCard from "../../../common/Cards/SmartPotCard";
import CartList from "../../../components/commerce/cart/CartList";
import { Wrapper } from "../../../styles/commerce/cart/styles";

const Cart: NextPage = () => {
  return (
    <Wrapper>
      <h1>My Cart</h1>
      <CartList />

      <div className="button-wrap">
        <Link href={"/commerce/order/order-form"}>
          <PriceButtonStyle>
            <h3>CHECKOUT</h3>
          </PriceButtonStyle>
        </Link>
      </div>
      <div className="card-wrap">
        <SmartPotCard price={36000} />
      </div>
    </Wrapper>
  );
};

export default Cart;
