
import React, { useRef } from "react";
const Box = (props) => {
    const mesh = useRef();
   
    return (
        <mesh
            {...props}
            ref={mesh}
            rotation={[props.shape.xAxis?props.shape.xAxis:0, props.shape.yAxis?props.shape.yAxis: 1, props.shape.zAxis?props.shape.zAxis:0]}
        >
            <boxGeometry args={[props.shape.width?props.shape.width:2, props.shape.height?props.shape.height:2, 2]} />
            <meshStandardMaterial attach="material" color={"#0xffff00"} />
        </mesh>
    );
}
export default Box;