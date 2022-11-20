import { useEffect, useState } from "react";
import {
  getOrderCount,
  getProductCount,
  getUserCount,
} from "../../../../apis/admin";
import { Wrapper } from "./styles";

const OrderTotal = () => {
  const [data, setData] = useState();
  const [user, setUser] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchCount() {
      const data = await getOrderCount();
      setData(data?.content);

      const user = await getUserCount();
      setUser(user?.content);

      const product = await getProductCount();
      setProduct(product?.content);
    }
    fetchCount();
  }, []);

  return (
    <Wrapper>
      <div className="content-wrapper">
        <div className="div-flex">
          <div className="div-wrapper">
            <div className="button-wrapper">
              <h2>총 판매 건 수</h2>
              <div className="order-data">{data}</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="button-wrapper">
              <h2>가입 유저 수</h2>
              <div className="order-data">{user}</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="button-wrapper">
              <h2>보유 상품 수</h2>
              <div className="order-data">{product}</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OrderTotal;
