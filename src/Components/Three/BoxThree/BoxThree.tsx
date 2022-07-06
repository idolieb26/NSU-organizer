import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

function BoxThree(props: any) {

    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)

    // @ts-ignore
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => setClicked((e)=>!e)}
            onPointerOver={(event) => setHovered(true)}
            onPointerOut={(event) => setHovered(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default BoxThree;