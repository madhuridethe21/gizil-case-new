
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
const CircleShape =(props) =>{
    const mesh = useRef();
    useFrame(() => {
      // mesh.current.rotation.y = mesh.current.rotation.x += 0.01;
    });
  return (
      <mesh ref={mesh}  rotation={[props.shape.xAxis?props.shape.xAxis:0, props.shape.yAxis?props.shape.yAxis: 1, props.shape.zAxis?props.shape.zAxis:0]}>
         <cylinderGeometry args={[props.shape.radius?props.shape.radius:1, props.shape.radius?props.shape.radius:1, props.shape.height?props.shape.height:4, 32]} />
         <meshStandardMaterial color={"0xffff00"} />
      </mesh>
    );
  }

  export default CircleShape;