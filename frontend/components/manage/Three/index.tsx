import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { FC } from "react";
import Flower from "../../Flower";

interface Props {
  isAnimated: boolean;
}

const Three: FC<Props> = ({ isAnimated }) => {
  // shape, surface를 가지고 있음.
  // geometry = shape = 구, 정육면체등등
  // material = surface
  // geomtry + metrial = 3d model = 두가지를 combine하여 mesh를 만듬

  const angleToRadians = (angle: number) => (Math.PI / 180) * angle;

  return (
    <>
      {/* 카메라 */}
      <PerspectiveCamera makeDefault position={[2, 7, 8.5]} />
      <OrbitControls enableZoom={false} />
      {/* 모델 */}
      <Flower isAnimated={isAnimated} />
      {/* 조명 */}
      <ambientLight args={["#fcfbf3", 1]} />
      <directionalLight args={[0xffffff, 0.5]} castShadow />
    </>
  );
};

export default Three;
