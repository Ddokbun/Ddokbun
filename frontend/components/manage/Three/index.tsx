import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import Flower from "../../Flower";
import * as THREE from "three";

const Three = ({ light }: any) => {
  // shape, surface를 가지고 있음.
  // geometry = shape = 구, 정육면체등등
  // material = surface
  // geomtry + metrial = 3d model = 두가지를 combine하여 mesh를 만듬

  const angleToRadians = (angle: number) => (Math.PI / 180) * angle;
  // const [colorMap, displacementMap, normalMap, roughnessMap] = useTexture([
  //   "/color.jpg",
  //   "/disp.png",
  //   "/normal.jpg",
  //   "/roughness.jpg",
  // ]);

  const orbitControlsRef = useRef<any>(null);
  useFrame(state => {
    if (orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle?.(-angleToRadians(24) * x);
      orbitControlsRef.current.setPolarAngle?.((y + 0.5) * angleToRadians(90));
      // orbitControlsRef.current.update?.();
    }
  });

  return (
    <>
      {/* 카메라 */}
      <PerspectiveCamera makeDefault position={[1, 5, 6.5]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(50)}
        maxPolarAngle={angleToRadians(80)}
      />
      {/* 모델 */}
      <Flower />
      {/* <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh> */}
      {/* 땅 */}
      {/* <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial
          // displacementScale={0.2}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
        />
      </mesh> */}
      {/* 조명 */}
      <ambientLight args={["#fcfbf3", 1]} />
      {/* <spotLight
        args={["#ffffff", 1.5, 7, angleToRadians(45), 0.5]}
        position={[-3, 1, 0]}
        castShadow
      /> */}
      <directionalLight args={[0xffffff, 0.5]} />
      {/* <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      /> */}
      {/* <Environment ground files={"background.hdr"} path={"/"}>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial map={colorMap} side={THREE.BackSide} />
        </mesh>
      </Environment> */}
    </>
  );
};

export default Three;
