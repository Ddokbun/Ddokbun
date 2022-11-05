import {
  OrbitControls,
  OrbitControlsProps,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Theme } from "../../../styles/theme";
import Flower from "../../Flower";

const Three = () => {
  // shape, surface를 가지고 있음.
  // geometry = shape = 구, 정육면체등등
  // material = surface
  // geomtry + metrial = 3d model = 두가지를 combine하여 mesh를 만듬

  const angleToRadians = (angle: number) => (Math.PI / 180) * angle;

  const orbitControlsRef = useRef<any>(null);
  useFrame(state => {
    if (orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle?.(-angleToRadians(24) * x);
      orbitControlsRef.current.setPolarAngle?.((y + 0.5) * angleToRadians(50));
      orbitControlsRef.current.update?.();
    }
  });

  useEffect(() => {
    if (orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, []);

  return (
    <>
      {/* 카메라 */}
      <PerspectiveCamera makeDefault position={[0, 1, 4.5]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(40)}
      />
      {/* 모델 */}
      <Flower />
      {/* <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh> */}
      {/* 땅 */}
      <mesh rotation={[-angleToRadians(90), 0, 0]}>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial color={Theme.color.mainGreen} />
      </mesh>
      {/* 조명 */}
      <ambientLight args={["#ffffff", 0.5]} />
    </>
  );
};

export default Three;
