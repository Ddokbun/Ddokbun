import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Theme } from "../../../styles/theme";
import Flower from "../../Flower";

const Three = () => {
  // shape, surface를 가지고 있음.
  // geometry = shape = 구, 정육면체등등
  // material = surface
  // geomtry + metrial = 3d model = 두가지를 combine하여 mesh를 만듬

  const angleToRadians = (angle: number) => (Math.PI / 180) * angle;

  const orbitControlsRef = useRef(null);
  useFrame(state => {});

  useEffect(() => {
    if (orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls ref={orbitControlsRef} />

      <Flower />

      {/* <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh> */}
      <mesh rotation={[-angleToRadians(90), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color={Theme.color.mainGreen} />
      </mesh>
      <ambientLight args={["#ffffff", 1]} />
    </>
  );
};

export default Three;
