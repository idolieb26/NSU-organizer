import React, {useRef} from "react";
import {Line} from "@react-three/drei"
import {Vector3,BufferGeometry} from "three";
import {useThree} from "@react-three/fiber";

function LineThree() {
    const { width } = useThree((state) => state.viewport)
    const points = []
    points.push(new Vector3(-10, 0, 0))
    points.push(new Vector3(0, 10, 0))
    points.push(new Vector3(10, 0, 0))
    const lineGeometry = new BufferGeometry().setFromPoints(points)

    return (
        // @ts-ignore
        <Line points={points}
              color={"white"}
              lineWidth={width/32}
        >
        </Line>
    );
}

export default LineThree;