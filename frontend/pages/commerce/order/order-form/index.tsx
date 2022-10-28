import { NextPage } from "next";
import CartList from "../../../../components/commerce/cart/CartList";
import OrderFormComponent from "../../../../components/commerce/order/OrderForm";
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
        <OrderFormComponent />
      </div>
    </Wrapper>
  );
};

export default OrderForm;
