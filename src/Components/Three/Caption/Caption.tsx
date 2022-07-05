import React from "react";
import { Text } from '@react-three/drei'
import { Canvas, useThree, useFrame } from '@react-three/fiber'

// @ts-ignore
function Caption({children} ) {
    const { width } = useThree((state) => state.viewport)
    return (
        // @ts-ignore
        <Text
            position={[0, 0, -5]}
            lineHeight={0.8}
            font="/Ki-Medium.ttf"
            fontSize={width / 2}
            material-toneMapped={false}
            anchorX="center"
            anchorY="middle">
            {children}
        </Text>
    )
}

export default Caption;