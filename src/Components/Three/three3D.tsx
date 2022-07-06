import React from 'react'
import {Canvas} from '@react-three/fiber'
import BoxThree from "./BoxThree/BoxThree";
import {Line, OrbitControls, Text} from "@react-three/drei";
import CaptionThree from "./CaptionThree/CaptionThree";
import LineThree from "./LineThree/LineThree";

function Three3D() {
    return (
        <Canvas dpr={[1, 2]} camera={{position: [0, 0, 10]}}>
            <OrbitControls/>
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
            <BoxThree position={[0, 0, 0]}/>
            <React.Suspense fallback={null}>
                <CaptionThree text={"We Have fonts yeahyy"}/>
            </React.Suspense>
            <LineThree/>
        </Canvas>
    );
}

export default Three3D;


