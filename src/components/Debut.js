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




            {/* Pour rendre un élément cliquable */}
            <Text
                position={[0, 0, -250]}
                fontSize={20}
                color="#7d7d7d"
                anchorX="center"
                anchorY="middle"
                onClick={() => {
                    window.location.href = '/Home2';
                }}
                
            >
                Devenez un héros de l'empire romain ! Jouez dès maintenant.
            </Text>
        </>
    );
}

function App() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [0, 0, 200], fov: 60 }}>
                <ambientLight intensity={0.1} />
                <directionalLight position={[0, 1, 0]} intensity={0.2} />
                <Room />
                <OrbitControls
                    enablePan={false} // Empêche le panoramique (mouvement latéral)
                    maxPolarAngle={Math.PI / 2} // Limite l'angle vertical de la caméra
                    minDistance={100} // Distance minimale à partir de l'origine
                    maxDistance={500} // Distance maximale à partir de l'origine
                />
            </Canvas>
        </div>
    );
}

export default App;
