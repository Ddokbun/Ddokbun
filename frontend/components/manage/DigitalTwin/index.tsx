import React, { Suspense } from "react";
import AutoToggle from "../AutoToggle";
import { Wrapper } from "./styles";
import { Canvas } from "@react-three/fiber";
import Three from "../Three";

const DigitalTwin = ({ light }: any) => {
  return (
    <Wrapper>
      <div className="top-container">
        <h2>똑분</h2>
        <AutoToggle />
      </div>
      <div className="twin-background">
        <Suspense fallback={null}>
          <Canvas id="digital-twin">
            <Three light={light} />
          </Canvas>
        </Suspense>
      </div>
    </Wrapper>
  );
};

export default DigitalTwin;
