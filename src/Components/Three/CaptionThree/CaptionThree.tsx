import React from "react";
import { Text } from '@react-three/drei';
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber'

function CaptionThree(props:any ) {
    const { width } = useThree((state) => state.viewport)

    return (
        // @ts-ignore
        <Text
            position={[0, 3, -5]}
            lineHeight={0.8}
            fontSize={width / 32}
            material-toneMapped={false}
            anchorX="center"
            anchorY="middle">
            {props.text}
        </Text>
    )
}

export default CaptionThree;