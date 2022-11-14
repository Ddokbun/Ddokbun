import React, { FC, lazy, Suspense, useEffect, useState } from "react";
import AutoToggle from "../AutoToggle";
import { Wrapper } from "./styles";
import { Canvas } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Rain from "../Rain";
import Watering from "../../../assets/icon/watering-can.svg";
import Image from "next/image";

const Three = lazy(() => import("../Three"));

interface Props {
  light: number;
  onWateringHandler: () => void;
}

const DigitalTwin: FC<Props> = ({ light, onWateringHandler }) => {
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
    onWateringHandler();
  };

  return (
    <Wrapper light={100 - light * 20}>
      <div className="top-container">
        <h2>{plantNickname}</h2>
        <AutoToggle />
      </div>
      <div className="twin-background">
        <div className="svg-container tooltip" onClick={onShowAnimationHandler}>
          <Watering viewBox="0 0 512 512" />
          <p className="tooltip-text">물 주려면 클릭!</p>
        </div>
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
