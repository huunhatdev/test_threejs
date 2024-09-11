import { Html, Sphere } from "@react-three/drei";
import { TextureLoader, BackSide } from "three";

const TexturedSphere = ({ tags = [], texture, onClick = () => {} }) => {
    return (
        <Sphere args={[1, 32, 32]}>
            <meshStandardMaterial
                map={new TextureLoader().load(texture)}
                side={BackSide}
            />
            {tags.map((item) => (
                <mesh
                    key={item.id}
                    position={item.position}
                    onClick={() => onClick(item.id)}
                >
                    <sphereGeometry args={[0.05, 10, 10]} />
                    <meshBasicMaterial
                        transparent
                        map={new TextureLoader().load("assets/footstep.png")}
                    />
                    <Html>
                        <span style={{ color: "red" }}>{item.id}</span>
                    </Html>
                </mesh>
            ))}
        </Sphere>
    );
};

export default TexturedSphere;
