import React, { FC, lazy, Suspense, useEffect, useState } from "react";
import AutoToggle from "../AutoToggle";
import { Wrapper } from "./styles";
import { Canvas } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Rain from "../Rain";
import { useInterval } from "../../../utils/useInterval";

const Three = lazy(() => import("../Three"));

interface Props {
  light: number;
}

const DigitalTwin: FC<Props> = ({ light }) => {
  const [isMounted, setIsMounted] = useState(false);
  const plantNickname = useSelector(
    (state: RootState) => state.manage.plantNickname,
  );
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isAnimated) {
      return;
    }

    const timer = setTimeout(() => {
      setIsAnimated(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [isAnimated]);

  const onShowAnimationHandler = () => {
    setIsAnimated(true);
  };

  return (
    <Wrapper light={100 - light * 20}>
      <div className="top-container">
        <h2>{plantNickname}</h2>
        <span onClick={onShowAnimationHandler}>물주기</span>
        <AutoToggle />
      </div>
      <div className="twin-background">
        {!isMounted ? null : (
          <Suspense fallback={null}>
            {isAnimated && <Rain />}
            <Canvas id="digital-twin">
              <Three isAnimated={isAnimated} />
            </Canvas>
          </Suspense>
        )}
      </div>
    </Wrapper>
  );
};

export default DigitalTwin;
