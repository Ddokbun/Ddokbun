import { NextPage } from "next";
import CartList from "../../../../components/commerce/cart/CartList";
import { Wrapper } from "../../../../styles/commerce/order/order-form/styles";

const OrderForm: NextPage = () => {
  return (
    <Wrapper>
      <div className="row">
        <h1>Buy List</h1>
        <CartList />
      </div>
      <div className="row">
        <h1 className="sub-title">Order Information</h1>
      </div>
    </Wrapper>
  );
};

export default OrderForm;
