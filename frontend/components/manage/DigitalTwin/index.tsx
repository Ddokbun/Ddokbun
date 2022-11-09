import React, { lazy, Suspense, useEffect, useState } from "react";
import AutoToggle from "../AutoToggle";
import { Wrapper } from "./styles";
import { Canvas } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Three = lazy(() => import("../Three"));

const DigitalTwin = ({ light }: any) => {
  const [isMounted, setIsMounted] = useState(false);
  const plantNickname = useSelector(
    (state: RootState) => state.manage.plantNickname,
  );
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Wrapper>
      <div className="top-container">
        <h2>{plantNickname}</h2>
        <AutoToggle />
      </div>
      <div className="twin-background">
        {!isMounted ? null : (
          <Suspense fallback={null}>
            <Canvas id="digital-twin">
              <Three light={light} />
            </Canvas>
          </Suspense>
        )}
      </div>
    </Wrapper>
  );
};

export default DigitalTwin;
