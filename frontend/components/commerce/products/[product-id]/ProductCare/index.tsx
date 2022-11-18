import React from "react";
import SimpleGraph from "../../../../../common/Graph/SimpleGraph";
import { Wrapper } from "./styles";

import Soilhumi from "../../../../../assets/icon/soilhumidity.png";
import Sun from "../../../../../assets/icon/sun.png";
import Tem from "../../../../../assets/icon/thermometer.png";
import Water from "../../../../../assets/icon/water.png";
import Image from "next/image";

const ProductCare: React.FC<{
  itemInfo?: string;
  water: number;
  waterInfo?: string;
  temper?: string;
  temperInfo?: string;
  light?: number;
  lightInfo?: string;
  humid: string;
}> = ({
  itemInfo,
  water,
  humid,
  waterInfo,
  temper,
  temperInfo,
  light,
  lightInfo,
}) => {
  return (
    <Wrapper>
      <h1>식물정보</h1>
      <p>{itemInfo}</p>
      {/* <SimpleGraph
        pages="commerce"
        water={`${(15 / water) * 100}%`}
        humid={`30%`}
        temper="80%"
        waterBottle={null}
      /> */}
      <div className="plant-growth">
        <div className="plant-grid">
          <div className="col">
            <div className="imgwrap">
              <Image src={Tem} layout="fill" objectFit="contain" />
            </div>
            <div className="content">
              <h3>적정 온도 : {temper}</h3>
              <p>{temperInfo}</p>
            </div>
          </div>
          <div className="col">
            <div className="imgwrap">
              <Image src={Water} layout="fill" objectFit="contain" />
            </div>
            <div className="content">
              <h3>물 주기 : {water}일에 한번</h3>
              <p>{waterInfo}</p>
            </div>
          </div>
          <div className="col">
            <div className="imgwrap">
              <Image src={Soilhumi} layout="fill" objectFit="contain" />
            </div>
            <div className="flex">
              <h3>적정 습도 : {humid}</h3>
            </div>
          </div>
          <div className="col">
            <div className="imgwrap">
              <Image src={Sun} layout="fill" objectFit="contain" />
            </div>
            <div className="content">
              <h3>광량 : Level {light}</h3>
              <p>{lightInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductCare;
