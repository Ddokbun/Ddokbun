import React from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import plant from "../../../public/three/plant.fbx";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const Three = (props: any) => {
  useGLTF.preload("/three/plant.gltf");

  const gltf = useLoader(FBXLoader, plant);
  return <primitive object={0} position={[0, 0, 0]} />;

  return (
    <group {...props} dispose={null}>
      <group
        name="camera"
        position={[10, 0, 50]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <PerspectiveCamera fov={40} near={10} far={1000} />
      </group>
      <group
        name="sun"
        position={[100, 50, 100]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <pointLight intensity={10} />
      </group>
    </group>
  );
};

export default Three;
