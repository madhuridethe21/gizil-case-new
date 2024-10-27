import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
const ConeShape = (props) => {
  const mesh = useRef();
  useFrame(() => {
    //  mesh.current.rotation.y = mesh.current.rotation.x -= 0.01;
  });
  return (
    <mesh ref={mesh} rotation={[props.shape.xAxis?props.shape.xAxis:0, props.shape.yAxis?props.shape.yAxis: 1, props.shape.zAxis?props.shape.zAxis:0]} scale={(0.5, 0.5, 0.8)}>
      <coneGeometry
        attach="geometry"
        args={[props.shape.radius?props.shape.radius:2, props.shape.height?props.shape.height:4, 10]}
        smoothness={5}
        {...props} />
      <meshPhongMaterial
        color={'#0xffff00'}
        attach="material"
        transparent
        roughness={0.1}
        metalness={0.1} />
    </mesh>
  );
}

export default ConeShape;