import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

function Road({ texture, position }) {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={position}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
}

function House({ texture, position }) {
    // Largeur de la rue
    const roadWidth = 10;
    // Largeur de la maison
    const houseWidth = 15;

    // Position de la maison en fonction de la position de la rue et des dimensions de la maison
    const housePosition = [position[0] - (roadWidth / 2 + houseWidth / 6), position[1], position[2]];

    return (
        <mesh rotation={[0, -Math.PI / 2, 0]} position={housePosition}>
            <planeGeometry args={[16, 15]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
}
function House2({ texture, position }) {
    // Largeur de la rue
    const roadWidth = 10;
    // Largeur de la maison
    const houseWidth = 15;

    // Position de la maison en fonction de la position de la rue et des dimensions de la maison
    const housePosition = [position[0] - (roadWidth / 2 + houseWidth / 6), position[1], position[2]];

    return (
        <mesh rotation={[0, -Math.PI / 2, 0]} position={housePosition}>
            <planeGeometry args={[16, 15]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
}
function Mur({ texture, position }) {
    return (
        <mesh rotation={[-Math.PI / 1, 0, 0]} position={position}>
            <planeGeometry args={[30, 15]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
}
function Mur2({ texture, position }) {
    return (
        <mesh rotation={[-Math.PI / 10000, 0, 0]} position={position}>
            <planeGeometry args={[30, 15]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
}


function Roof({ texture, position }) {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={position}>
            <planeGeometry args={[30, 40]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
}
function Scene() {
    const roadTexture = useLoader(TextureLoader, './ruepave3.jpg');
    const sidewalkTexture = useLoader(TextureLoader, './Facade.jpeg');
    const House2Texture = useLoader(TextureLoader, './Facade2.jpeg');
    const RoofTexture = useLoader(TextureLoader, './toituretuile1.jpg');
    const MurTexture = useLoader(TextureLoader, './mur.jpg');
    const Mur2Texture = useLoader(TextureLoader, './mur.jpg');


    House2Texture.minFilter = THREE.LinearFilter;
    House2Texture.maxFilter = THREE.LinearFilter;
    MurTexture.minFilter = THREE.LinearFilter;
    MurTexture.maxFilter = THREE.LinearFilter;
    Mur2Texture.minFilter = THREE.LinearFilter;
    Mur2Texture.maxFilter = THREE.LinearFilter;
    roadTexture.minFilter = THREE.LinearFilter;
    roadTexture.magFilter = THREE.LinearFilter;
    sidewalkTexture.minFilter = THREE.LinearFilter;
    sidewalkTexture.magFilter = THREE.LinearFilter;
    RoofTexture.minFilter = THREE.LinearFilter;
    RoofTexture.magFilter = THREE.LinearFilter;

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 1, 0]} intensity={0.5} />
            <Suspense fallback={null}>
                {/* Ajout des routes */}
                <Road texture={roadTexture} position={[0, 0, 20]} />
                <Road texture={roadTexture} position={[0, 0, 10]} />
                <Road texture={roadTexture} position={[0, 0, 0]} />
                <Road texture={roadTexture} position={[0, 0, -10]} />
                <Road texture={roadTexture} position={[0, 0, -20]} />
                <Road texture={roadTexture} position={[0, 0, -30]} />
                <Road texture={roadTexture} position={[0, 0, -40]} />
                <Road texture={roadTexture} position={[0, 0, -50]} />
                <Road texture={roadTexture} position={[-10, 0, 20]} />
                <Road texture={roadTexture} position={[-10, 0, 10]} />
                <Road texture={roadTexture} position={[-10, 0, 0]} />
                <Road texture={roadTexture} position={[-10, 0, -10]} />
                <Road texture={roadTexture} position={[-10, 0, -20]} />
                <Road texture={roadTexture} position={[-10, 0, -30]} />
                <Road texture={roadTexture} position={[-10, 0, -40]} />
                <Road texture={roadTexture} position={[-10, 0, -50]} />
                <Road texture={roadTexture} position={[-20, 0, 20]} />
                <Road texture={roadTexture} position={[-20, 0, 10]} />
                <Road texture={roadTexture} position={[-20, 0, 0]} />
                <Road texture={roadTexture} position={[-20, 0, -10]} />
                <Road texture={roadTexture} position={[-20, 0, -20]} />
                <Road texture={roadTexture} position={[-20, 0, -30]} />
                <Road texture={roadTexture} position={[-20, 0, -40]} />
                <Road texture={roadTexture} position={[-20, 0, -50]} />

                
                <Mur texture={MurTexture} position={[20, 7.5, -55]} />
                <Mur2 texture={Mur2Texture} position={[20, 7.5, 25]} />


                {/* Add more instances of Road with different positions */}
                <House texture={sidewalkTexture} position={[12.5, 7.5, 1]} />
                <House texture={sidewalkTexture} position={[12.5, 7.5, -31]} />
                <House2 texture={House2Texture} position={[12.5, 7.5, -15]} />
                <House2 texture={House2Texture} position={[12.5, 7.5, 17]} />
                <House2 texture={House2Texture} position={[12.5, 7.5, -47]} />
                <Roof texture={RoofTexture} position={[20, 15, 5]} />
                <Roof texture={RoofTexture} position={[20, 15, -35]} />
            </Suspense>
            <OrbitControls />
        </>
    );
}

export default function App() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [0, 5, 20], fov: 60 }} style={{ width: '100%', height: '100%' }}>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}
