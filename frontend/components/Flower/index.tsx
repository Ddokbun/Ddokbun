import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Flower = () => {
  const { nodes, materials } = useGLTF("/models/model.glb");
  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.pCylinder20_lambert1_0.geometry}
            material={materials.lambert1}
          />
          <mesh
            geometry={nodes.pCylinder20_Double_0.geometry}
            material={materials.Double}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/model.glb");

export default Flower;
