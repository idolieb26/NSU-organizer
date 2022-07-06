import React from "react";
import { Text } from '@react-three/drei'
import { Canvas, useThree, useFrame } from '@react-three/fiber'

// @ts-ignore
function Caption( ) {
    const { width } = useThree((state) => state.viewport)
    return (
        // @ts-ignore
        <Text
            position={[0, 3, -5]}
            lineHeight={0.8}
            font="/Ki-Medium.ttf"
            fontSize={width / 32}
            material-toneMapped={false}
            anchorX="center"
            anchorY="middle">
            Hi, Mir We have 3D fontss
        </Text>
    )
}

export default Caption;