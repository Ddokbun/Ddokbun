import Image from "next/image";
import React from "react";
import AutoToggle from "../AutoToggle";
import { Wrapper } from "./styles";
import Sun from "../../../assets/icon/Sun.svg";
import Water from "../../../assets/icon/Water.svg";

const DigitalTwin = () => {
  return (
    <Wrapper>
      <div className="top-container">
        <h2>똑분</h2>
        <AutoToggle />
      </div>
      <div className="twin-background">
        <div className="icon-container">
          <Sun viewBox="-50 -30 200 200" />
          <Water className="water" viewBox="-50 -30 200 200" />
        </div>
      </div>
    </Wrapper>
  );
};

export default DigitalTwin;
