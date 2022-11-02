import React, { Suspense } from "react";
import AutoToggle from "../AutoToggle";
import { Wrapper } from "./styles";
import Sun from "../../../assets/icon/Sun.svg";
import Water from "../../../assets/icon/Water.svg";
import { Canvas } from "@react-three/fiber";
import Three from "../Three";

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
        <Canvas id="digital-twin">
          <Suspense fallback={null}>
            <Three />
          </Suspense>
        </Canvas>
      </div>
    </Wrapper>
  );
};

export default DigitalTwin;
