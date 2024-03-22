import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Box, Plane, Text } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader'; // Importez TextureLoader pour charger des images

function Room() {
    // Charger la texture JPG
    const textureJPG = useLoader(TextureLoader, '/mur.jpg');

    // Utilisez la texture JPG pour tous les matériaux
    const wallTexture = textureJPG;
    const ceilingTexture = textureJPG;
    const floorTexture = textureJPG;

    return (
        <>
            {/* Mur gauche */}
            <Box args={[1, 400, 1000]} position={[-500, 0, 0]}>
                <meshStandardMaterial map={wallTexture} />
            </Box>

            {/* Mur droit */}
            <Box args={[1, 400, 1000]} position={[500, 0, 0]}>
                <meshStandardMaterial map={wallTexture} />
            </Box>

            {/* Mur arrière */}
            <Box args={[1000, 400, 1]} position={[0, 0, -500]}>
                <meshStandardMaterial map={wallTexture} />
            </Box>

            {/* Mur avant */}
            <Box args={[1000, 400, 1]} position={[0, 0, 500]}>
                <meshStandardMaterial map={wallTexture} />
            </Box>

            {/* Sol */}
            <Plane args={[1000, 1000]} position={[0, -200, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshStandardMaterial map={floorTexture} />
            </Plane>

            {/* Plafond */}
            <Plane args={[1000, 1000]} position={[0, 200, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial map={ceilingTexture} />
            </Plane>
            {/* Colonne */}
            <mesh position={[-300, 0, -200]}>
                <cylinderGeometry args={[20, 20, 400, 32]} />
                <meshStandardMaterial color="white" />
            </mesh>

            {/* Statue */}
            <mesh position={[0, 0, 300]}>
                <sphereGeometry args={[100, 32, 32]} />
                <meshStandardMaterial color="marble" />
            </mesh>

            {/* Table */}
            <mesh position={[400, 50, -100]}>
                <boxGeometry args={[200, 100, 100]} />
                <meshStandardMaterial color="brown" />
            </mesh>
            {/* Pour rendre un élément cliquable */}
            <Text
                position={[0, 0, -250]}
                fontSize={10}
                color="red"
                anchorX="center"
                anchorY="middle"
                onClick={() => {
                    // Rediriger vers une autre page au clic
                    window.location.href = '/Home2';
                }}
            >
                Prêt?
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
