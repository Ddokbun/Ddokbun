import React, { FC, lazy, Suspense, useEffect, useState } from "react";
import AutoToggle from "../AutoToggle";
import { Wrapper } from "./styles";
import { Canvas } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Rain from "../Rain";

const Three = lazy(() => import("../Three"));

interface Props {
  light: number;
}

const DigitalTwin: FC<Props> = ({ light }) => {
  const [isMounted, setIsMounted] = useState(false);
  const plantNickname = useSelector(
    (state: RootState) => state.manage.plantNickname,
  );
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Wrapper light={100 - light * 20}>
      <div className="top-container">
        <h2>{plantNickname}</h2>
        <AutoToggle />
      </div>
      <div className="twin-background">
        {/* <Rain /> */}
        {!isMounted ? null : (
          <Suspense fallback={null}>
            <Canvas id="digital-twin">
              <Three />
            </Canvas>
          </Suspense>
        )}
      </div>
    </Wrapper>
  );
};

export default DigitalTwin;
