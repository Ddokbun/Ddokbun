import React from "react";
import { Wrapper } from "./styles";

const ProductSummary: React.FC<{
  originPlace?: string;
  plantZRName?: string;
  growthWidth?: number;
  growthHeight?: number;
}> = ({ originPlace, plantZRName, growthWidth, growthHeight }) => {
  return (
    <Wrapper>
      <ul>
        {originPlace ? <li>원산지 : {originPlace}</li> : null}
        {plantZRName ? <li>영명 : {plantZRName}</li> : null}
        {growthWidth && growthHeight ? (
          <li>
            성장 높이 : {growthWidth}cm * {growthHeight}cm
          </li>
        ) : null}
      </ul>
    </Wrapper>
  );
};

export default ProductSummary;
