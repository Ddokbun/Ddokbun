import React, { Suspense, useEffect } from "react";
import AutoToggle from "../AutoToggle";
import { Wrapper } from "./styles";
import Sun from "../../../assets/icon/Sun.svg";
import Water from "../../../assets/icon/Water.svg";
import Plant from "../../../assets/3d/plant.gltf";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import { createRoot } from "react-dom/client";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Three from "./Three";
// import { Model } from "../../../Model";

const DigitalTwin = () => {
  // useEffect(() => {
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000,
  //   );
  //   camera.position.set(0.8, 1.4, 1.0);
  //   const scene = new THREE.Scene();

  //   const renderer = new THREE.WebGLRenderer();
  //   createRoot(document.getElementById("twin")!).render(
  //     <Canvas>
  //       <ambientLight />
  //       <pointLight position={[10, 10, 10]} />
  //       <Box position={[-1.2, 0, 0]} />
  //       <Box position={[1.2, 0, 0]} />
  //     </Canvas>,
  //   );
  //   const loader = new GLTFLoader();
  //   loader.load("../../../assets/3d/plant.gltf", function (gltf) {
  //     // gltf.scene.traverse(function (child) {
  //     //     if ((child as THREE.Mesh).isMesh) {
  //     //         const m = (child as THREE.Mesh)
  //     //         m.receiveShadow = true
  //     //         m.castShadow = true
  //     //     }
  //     //     if (((child as THREE.Light)).isLight) {
  //     //         const l = (child as THREE.Light)
  //     //         l.castShadow = true
  //     //         l.shadow.bias = -.003
  //     //         l.shadow.mapSize.width = 2048
  //     //         l.shadow.mapSize.height = 2048
  //     //     }
  //     // })
  //     scene.add(gltf.scene);
  //     renderer.render(scene, camera);
  //   });
  // }, []);

  return (
    <Wrapper>
      <div className="top-container">
        <h2>똑분</h2>
        <AutoToggle />
      </div>
      <div className="twin-background">
        <div className="icon-container">
          <Sun viewBox="-50 -30 200 200" />
          <Water className="water" viewBox="-50 -30 200 200" />
        </div>
        <Canvas className="" id="twin">
          <Suspense fallback={null}>
            <Three />
          </Suspense>
        </Canvas>
      </div>
    </Wrapper>
  );
};

export default DigitalTwin;
