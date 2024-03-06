import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Box, Plane } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Room() {
    const wallTexture = useLoader(TextureLoader, './mur.jpg');
    const floorTexture = useLoader(TextureLoader, './ruepave.png');
    const ceilingTexture = useLoader(TextureLoader, './mur.jpg');

    wallTexture.wrapS = THREE.RepeatWrapping;
    wallTexture.wrapT = THREE.RepeatWrapping;
    wallTexture.repeat.set(4, 4);

    const gltf = useLoader(GLTFLoader, './marbre.glb');
    const gltfPosition = [250, 0, 0]; // Définissez les coordonnées XYZ de la position du modèle
    const gltfScale = [50, 50, 50]; // Définissez l'échelle du modèle glTF


    return (
        <>
            {/* Mur gauche */}
            <Box args={[1, 200, 500]} position={[-250, 0, 0]}>
                <meshStandardMaterial map={wallTexture} />
            </Box>

            {/* Mur droit */}
            <Box args={[1, 200, 500]} position={[250, 0, 0]}>
                <meshStandardMaterial map={wallTexture} />
            </Box>

            {/* Mur arrière */}
            <Box args={[500, 200, 1]} position={[0, 0, -250]}>
                <meshStandardMaterial map={wallTexture} />
            </Box>

            {/* Mur avant */}
            <Box args={[500, 200, 1]} position={[0, 0, 250]}>
                <meshStandardMaterial map={wallTexture} />
            </Box>

            {/* Sol */}
            <Plane args={[500, 500]} position={[0, -100, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshStandardMaterial map={floorTexture} />
            </Plane>

            {/* Plafond */}
            <Plane args={[500, 500]} position={[0, 100, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial map={ceilingTexture} />
            </Plane>

            {/* Placer le modèle glTF dans un groupe pour le garder fixe par rapport à la scène */}
            <group position={gltfPosition}>
                <primitive object={gltf.scene} scale={gltfScale} />
                
            </group>
        </>
      
    );
}

function App() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [0, 10, 20], fov: 60 }}>
                <ambientLight intensity={0.1} />
                <directionalLight position={[0, 1, 0]} intensity={0.1} />
                <Suspense fallback={null}>
                    <Room />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div >
    );
}

export default App;
