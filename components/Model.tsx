import React, { useRef } from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

const Model = () => {
  const mesh = useRef();
  const { nodes } = useGLTF("/medias/torus2.glb");
  const { viewport } = useThree();
  useFrame(() => {
    mesh.current.rotation.x += 0.02;
  });
  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });
  return (
    <group scale={viewport.width / 8}>
      <Text fontSize={0.5} position={[0, 0, -0.5]}>
        hello!
      </Text>
      <mesh ref={mesh} {...nodes.Torus}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

export default Model;
