// Draw Sphere
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
const Sphere = (props) => {
    const mesh = useRef();

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });
    return (
        <mesh ref={mesh} position={[props.shape.xAxis?props.shape.xAxis:1.2, props.shape.yAxis?props.shape.yAxis:0,props.shape.zAxis?props.shape.zAxis: 0]}>
            <sphereGeometry
                attach="geometry"
                args={[props.shape.radius?props.shape.radius:1, props.shape.height?props.shape.height:22, 50]} // Width, Height and Depth of the sphere
                smoothness={5}
                {...props}
            />
            <meshPhongMaterial
                color={"#0xffff00"}
                attach="material"
                transparent
                roughness={0.1}
                metalness={0.1}
            />
        </mesh>
    );
}

export default Sphere;