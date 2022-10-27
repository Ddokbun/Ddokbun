import { NextPage } from "next";
import CartList from "../../../components/commerce/cart/CartList";
import { Wrapper } from "../../../styles/commerce/cart/styles";

const Cart: NextPage = () => {
  return (
    <Wrapper>
      <h1>My Cart</h1>
      <CartList />
    </Wrapper>
  );
};

export default Cart;
