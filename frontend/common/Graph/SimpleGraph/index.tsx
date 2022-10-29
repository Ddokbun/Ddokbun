import React from "react";
import { Progress, Wrapper } from "./styled";

import Temper from "../../../assets/commerce/temper.png";
import Water from "../../../assets/commerce/water.png";
import Humid from "../../../assets/commerce/humid.png";
import Image from "next/image";

interface SimpleGraphProps {
  temper: string;
  water: string;
  humid: string;
}

const SimpleGraph: React.FC<SimpleGraphProps> = ({ temper, water, humid }) => {
  return (
    <Wrapper>
      <div className="line">
        <Image src={Temper} alt="온도계이미지입니다" />
        <Progress level={temper}>
          <div className="graph-total">
            <div className="graph-now"></div>
          </div>
        </Progress>
      </div>
      <div className="line">
        <Image src={Water} alt="물 이미지입니다" />
        <Progress level={water}>
          <div className="graph-total">
            <div className="graph-now"></div>
          </div>
        </Progress>
      </div>
      <div className="line">
        <Image src={Humid} alt="토양습도 이미지입니다" />
        <Progress level={humid}>
          <div className="graph-total">
            <div className="graph-now"></div>
          </div>
        </Progress>
      </div>
    </Wrapper>
  );
};

export default SimpleGraph;
