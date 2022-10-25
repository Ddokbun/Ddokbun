import React from "react";
import { Label } from "./styles";

const ProductLabel: React.FC<{
  children: string;
}> = ({ children }) => {
  return (
    <Label>
      <p>{children}</p>
    </Label>
  );
};

export default ProductLabel;
