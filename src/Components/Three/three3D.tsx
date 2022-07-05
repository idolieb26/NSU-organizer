import React from 'react'
import { Canvas } from '@react-three/fiber'
import Box from "./Box/Box";
import {OrbitControls} from "@react-three/drei";

function Three3D (){
    return (
        <Canvas >
            <OrbitControls enableZoom={false}/>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[0, 0, 0]} />
        </Canvas>
);
}
export default Three3D;


