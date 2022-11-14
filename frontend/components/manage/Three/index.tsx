import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { FC, useRef } from "react";
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

  const orbitControlsRef = useRef<any>(null);
  // useFrame(state => {
  //   if (orbitControlsRef.current) {
  //     const { x, y } = state.mouse;
  //     orbitControlsRef.current.setAzimuthalAngle?.(-angleToRadians(90) * x);
  //     orbitControlsRef.current.setPolarAngle?.((y + 0.5) * angleToRadians(90));
  //     orbitControlsRef.current.update?.();
  //   }
  // });

  return (
    <>
      {/* 카메라 */}
      <PerspectiveCamera makeDefault position={[2, 10, 6.5]} />
      <OrbitControls
      // ref={orbitControlsRef}
      // minPolarAngle={angleToRadians(50)}
      // maxPolarAngle={angleToRadians(80)}
      />
      {/* 모델 */}
      <Flower isAnimated={isAnimated} />
      {/* 조명 */}
      <ambientLight args={["#fcfbf3", 1]} />
      <directionalLight args={[0xffffff, 1]} />
    </>
  );
};

export default Three;
