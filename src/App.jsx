import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TexturedSphere from "./components/TexturedSphere";
import { useState } from "react";

const list = [
    {
        id: "entrance",
        texture: "assets/360 images/1-Entrance.jpeg",
        tags: [{ id: "table1", position: [-0.5, -0.2, 0.6] }],
    },
    {
        id: "table1",
        texture: "assets/360 images/2-Window Table.jpeg",
        tags: [
            { id: "entrance", position: [0.82, -0.32, 0.15] },
            { id: "table2", position: [-0.9, -0.32, 0] },
        ],
    },
    {
        id: "table2",
        texture: "assets/360 images/3-Window Table 2.jpeg",
        tags: [
            { id: "table1", position: [-0.15, -0.32, -0.6] },
            { id: "conner", position: [-0.02, -0.32, 0.8] },
        ],
    },
    {
        id: "conner",
        texture: "assets/360 images/4-Corner.jpeg",
        tags: [{ id: "table2", position: [0.3, -0.32, -0.6] }],
    },
];

function App() {
    const [state, setState] = useState("conner");

    const { texture, tags } = list.find((item) => item.id === state);

    const handleClick = (id) => {
        setState(id);
    };

    return (
        <div>
            <a
                className="image_logo"
                href="https://view.vizion.space/modern-pub/Welcome/Modern-Pub-Entrance-?mode=no-intro"
                target="_blank"
            >
                <img src="assets/logo/logo.png" alt="3D Map" />
            </a>
            <Canvas
                frameloop="always"
                style={{ width: "100%", height: "100vh" }}
                camera={{ position: [0, 0, 15] }}
            >
                <OrbitControls
                    rotateSpeed={-0.5}
                    enableZoom={false}
                    enablePan={false}
                    enableDamping
                    dampingFactor={0.1}
                    minDistance={0.1}
                    maxDistance={0.1}
                />
                <ambientLight intensity={0.9} />
                <pointLight position={[-0.5, 0.5, 0]} />
                <TexturedSphere
                    tags={tags}
                    texture={texture}
                    onClick={handleClick}
                />
            </Canvas>
        </div>
    );
}

export default App;
