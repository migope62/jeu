import React, { useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Box, Plane, Text } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function Room() {
    // Charger les textures 3D depuis différents fichiers GLB
    const wallTextureGLB = useLoader(GLTFLoader, './brique.gltf');
    const ceilingTextureGLB = useLoader(GLTFLoader, './brique.gltf');
    const floorTextureGLB = useLoader(GLTFLoader, './brique.gltf');

    // Définir les coordonnées XYZ de la position du modèle et l'échelle du modèle glTF
    const gltfPosition = [250, 0, 0];
    const gltfScale = [0, 0, 0];

    // Extraire les textures 3D des modèles GLTF
    const wallTexture = useRef();
    const ceilingTexture = useRef();
    const floorTexture = useRef();

    wallTextureGLB.scene.traverse((child) => {
        if (child.isMesh) {
            wallTexture.current = child.material.map;
        }
    });

    ceilingTextureGLB.scene.traverse((child) => {
        if (child.isMesh) {
            ceilingTexture.current = child.material.map;
        }
    });

    floorTextureGLB.scene.traverse((child) => {
        if (child.isMesh) {
            floorTexture.current = child.material.map;
        }
    });

    return (
        <>
            {/* Mur gauche */}
            <Box args={[1, 400, 1000]} position={[-500, 0, 0]}>
                <meshStandardMaterial map={wallTexture.current} />
            </Box>

            {/* Mur droit */}
            <Box args={[1, 400, 1000]} position={[500, 0, 0]}>
                <meshStandardMaterial map={wallTexture.current} />
            </Box>

            {/* Mur arrière */}
            <Box args={[1000, 400, 1]} position={[0, 0, -500]}>
                <meshStandardMaterial map={wallTexture.current} />
            </Box>

            {/* Mur avant */}
            <Box args={[1000, 400, 1]} position={[0, 0, 500]}>
                <meshStandardMaterial map={wallTexture.current} />
            </Box>

            {/* Sol */}
            <Plane args={[1000, 1000]} position={[0, -200, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshStandardMaterial map={floorTexture.current} />
            </Plane>

            {/* Plafond */}
            <Plane args={[1000, 1000]} position={[0, 200, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial map={ceilingTexture.current} />
            </Plane>

            {/* Placer le modèle glTF dans un groupe pour le garder fixe par rapport à la scène */}
            <group position={gltfPosition}>
                <primitive object={wallTextureGLB.scene} scale={gltfScale} />
                <primitive object={ceilingTextureGLB.scene} scale={gltfScale} />
                <primitive object={floorTextureGLB.scene} scale={gltfScale} />
            </group>
            {/* Pour rendre un élément cliquable */}
            <Text
                position={[0, 0, -10]}
                fontSize={5}
                color="blue"
                anchorX="center"
                anchorY="middle"
                onClick={() => {
                    // Rediriger vers une autre page au clic
                    window.location.href = '/autre-page';
                }}
            >
                Commencer à jouer
            </Text>
        </>
    );
}

function App() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [0, 10, 20], fov: 60 }}>
                <ambientLight intensity={0.1} />
                <directionalLight position={[0, 1, 0]} intensity={0.2} />
                <Room />
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default App;
