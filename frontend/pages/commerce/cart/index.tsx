import { NextPage } from "next";
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
        <PriceButtonStyle width="300px">
          <h3>CHECKOUT</h3>
        </PriceButtonStyle>
      </div>
      <div className="card-wrap">
        <SmartPotCard price={36000} />
      </div>
    </Wrapper>
  );
};

export default Cart;
