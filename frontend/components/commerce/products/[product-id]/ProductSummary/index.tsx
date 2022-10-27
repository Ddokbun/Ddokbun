import React from "react";
import { Wrapper } from "./styles";

const ProductSummary: React.FC = () => {
  return (
    <Wrapper>
      <ul>
        <li>원산지 : 솔로몬군도, 인도네시아(자바섬)</li>
        <li>과명 : 천남성과</li>
        <li>영명 : 스킨다비스, 신답서스</li>
      </ul>
    </Wrapper>
  );
};

export default ProductSummary;
