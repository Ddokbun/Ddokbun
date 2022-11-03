import React from "react";
import SimpleGraph from "../../../../../common/Graph/SimpleGraph";
import { Wrapper } from "./styles";

const ProductCare: React.FC<{
  itemInfo?: string;
  water: number;
  humid: string;
}> = ({ itemInfo, water, humid }) => {
  const thisHumid = humid.slice(0, -1).split("~");
  const avgHumid =
    (parseInt(thisHumid[0].trim()) + parseInt(thisHumid[1].trim())) / 2;

  return (
    <Wrapper>
      <h1>식물정보</h1>
      <p>{itemInfo}</p>
      <SimpleGraph
        pages="commerce"
        water={`${(15 / water) * 100}%`}
        humid={`${avgHumid}%`}
        temper="80%"
        waterBottle={null}
      />
    </Wrapper>
  );
};

export default ProductCare;
