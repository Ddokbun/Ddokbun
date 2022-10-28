import { NextPage } from "next";
import CartList from "../../../../components/commerce/cart/CartList";
import OrderFormComponent from "../../../../components/commerce/order/OrderForm";
import PayFormComponent from "../../../../components/commerce/order/PayForm";
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
      <div className="row">
        <h1 className="sub-title">Payment Method</h1>
        <PayFormComponent />
      </div>
    </Wrapper>
  );
};

export default OrderForm;
