import React from 'react'
import { Canvas } from '@react-three/fiber'
import Box from "./Box/Box";
import {OrbitControls} from "@react-three/drei";
import Caption from "./Caption/Caption";

function Three3D (){
    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 60 }}>
            <OrbitControls/>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[0, 0, 0]} />

        </Canvas>
);
}
export default Three3D;


