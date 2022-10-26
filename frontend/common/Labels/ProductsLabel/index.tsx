import React from "react";
import { Wrapper } from "./styles";

const ProductLabel: React.FC<{
  children: string;
}> = ({ children }) => {
  return (
    <Wrapper>
      <p>{children}</p>
    </Wrapper>
  );
};

export default ProductLabel;
