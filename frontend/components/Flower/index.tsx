import * as THREE from "three";
import React, { FC, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Pot_cactus_TXTR_0: THREE.Mesh;
    Object_8: THREE.SkinnedMesh;
    Object_10: THREE.SkinnedMesh;
    Object_12: THREE.SkinnedMesh;
    Object_14: THREE.SkinnedMesh;
    Object_16: THREE.SkinnedMesh;
    Object_18: THREE.SkinnedMesh;
    Object_20: THREE.SkinnedMesh;
    Object_22: THREE.SkinnedMesh;
    Object_24: THREE.SkinnedMesh;
    Object_26: THREE.SkinnedMesh;
    Object_67: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    cactus_TXTR: THREE.MeshBasicMaterial;
  };
};

type ActionName = "Cacti Baby Dance";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

interface Props {
  isAnimated: boolean;
}

const Flower: FC<Props> = ({ isAnimated }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const group = useRef<any>();
  const { nodes, materials, animations }: any = useGLTF("/models/model.glb");
  console.log(animations[0]);

  const { actions } = useAnimations(animations, group);
  console.log(actions, "asdasdfasdf");
  console.log(actions["Cacti Baby Dance"]);

  useEffect(() => {
    actions["Cacti Baby Dance"]?.play();

    setTimeout(() => {
      actions["Cacti Baby Dance"]?.stop();
    }, 10000);
  }, [isAnimated]);

  return (
    <group ref={group} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 1.6, -0.1, 1.8]}>
          <group name="Cacti_Babyfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="_mouth" />
                <group name="group4">
                  <group name="Object_5">
                    <group name="Pot" position={[0, 1, 0]}>
                      <mesh
                        name="Pot_cactus_TXTR_0"
                        geometry={nodes.Pot_cactus_TXTR_0.geometry}
                        material={materials.cactus_TXTR}
                      />
                    </group>
                    <group name="eyeball" />
                    <group name="Open_mouth" position={[0.44, 0, 0]} />
                    <primitive object={nodes._rootJoint} />
                    <group name="Locator_Grp">
                      <group name="group3">
                        <group name="m" />
                      </group>
                      <group name="group2">
                        <group name="l" position={[0, 0, 0.86]} />
                      </group>
                      <group name="group1">
                        <group name="r" position={[0, 0, -0.87]} />
                      </group>
                    </group>
                    <skinnedMesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.cactus_TXTR}
                      skeleton={nodes.Object_8.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.cactus_TXTR}
                      skeleton={nodes.Object_10.skeleton}
                    />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.cactus_TXTR}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials.cactus_TXTR}
                      skeleton={nodes.Object_14.skeleton}
                    />
                    <skinnedMesh
                      name="Object_16"
                      geometry={nodes.Object_16.geometry}
                      material={materials.cactus_TXTR}
                      skeleton={nodes.Object_16.skeleton}
                    />
                    <skinnedMesh
                      name="Object_18"
                      geometry={nodes.Object_18.geometry}
                      material={materials.cactus_TXTR}
                      skeleton={nodes.Object_18.skeleton}
                    />
                    <skinnedMesh
                      name="Object_20"
                      geometry={nodes.Object_20.geometry}
                      material={materials.cactus_TXTR}
                      skeleton={nodes.Object_20.skeleton}
                    />
                    <skinnedMesh
                      name="Object_22"
                      geometry={nodes.Object_22.geometry}
                      material={materials.cactus_TXTR}
                      skeleton={nodes.Object_22.skeleton}
                    />
                    <skinnedMesh
                      name="Object_24"
                      geometry={nodes.Object_24.geometry}
                      material={materials.cactus_TXTR}
                      skeleton={nodes.Object_24.skeleton}
                    />
                    <skinnedMesh
                      name="Object_26"
                      geometry={nodes.Object_26.geometry}
                      material={materials.cactus_TXTR}
                      skeleton={nodes.Object_26.skeleton}
                    />
                    <skinnedMesh
                      name="Object_67"
                      geometry={nodes.Object_67.geometry}
                      material={materials.cactus_TXTR}
                      skeleton={nodes.Object_67.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/model.glb");

export default Flower;
