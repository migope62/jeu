// NewGame.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacter } from '../components/Stats/CharacterContext';
import '../assets/Style.css';
import '../assets/Choice.css';

function NewGame() {
    const { setSelectedCharacter } = useCharacter();

    return (
        <div className="page-choix-personnage">
            <h1 data-content="Choisissez votre personnage">Choisissez votre personnage</h1>
            <div className="personnages">
                <Link to="/Stats" className="personnage" onClick={() => setSelectedCharacter('guerrier')}>
                    <img src={`${process.env.PUBLIC_URL}/guerrier-pretorien-romain-badass-.jpeg`} alt="Guerrier" />
                    <h2>Guerrier</h2>
                </Link>
                <Link to="/Stats" className="personnage" onClick={() => setSelectedCharacter('archer')}>
                    <img src={`${process.env.PUBLIC_URL}/archer--romain-badass-.jpeg`} alt="Archer" />
                    <h2>Archer</h2>
                </Link>
                <Link to="/Stats" className="personnage" onClick={() => setSelectedCharacter('mage')}>
                    <img src={`${process.env.PUBLIC_URL}/Mage.jpeg`} alt="Mage" />
                    <h2>Mage</h2>
                </Link>
            </div>
        </div>
    );
}

export default NewGame;
