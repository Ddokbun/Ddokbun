import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { FC } from "react";
import Flower from "../../Flower";

interface Props {
  isAnimated: boolean;
}

const Three: FC<Props> = ({ isAnimated }) => {
  return (
    <>
      {/* 카메라 */}
      <PerspectiveCamera makeDefault position={[2, 7, 8.5]} />
      <OrbitControls enableZoom={false} />
      {/* 모델 */}
      <Flower isAnimated={isAnimated} />
    </>
  );
};

export default Three;
