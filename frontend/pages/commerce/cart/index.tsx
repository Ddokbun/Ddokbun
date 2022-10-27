import { NextPage } from "next";
import SmartPotCard from "../../../common/Cards/SmartPotCard";
import CartList from "../../../components/commerce/cart/CartList";
import { Wrapper } from "../../../styles/commerce/cart/styles";

const Cart: NextPage = () => {
  return (
    <Wrapper>
      <h1>My Cart</h1>
      <CartList />
      <div className="card-wrap">
        <SmartPotCard price={36000} />
      </div>
    </Wrapper>
  );
};

export default Cart;
