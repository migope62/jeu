import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Style.css';
import '../assets/Choice.css';

function NewGame() {
    return (
        <div className="page-choix-personnage">
            <h1 data-content="Choisissez votre personnage">Choisissez votre personnage</h1>
            <div className="personnages">
                <Link to="/Carte" className="personnage">
                    <img src={`${process.env.PUBLIC_URL}/guerrier-pretorien-romain-badass-.jpeg`} alt="Guerrier" />
                    <h2>Guerrier</h2>
                </Link>
                <Link to="/archer" className="personnage">
                    <img src={`${process.env.PUBLIC_URL}/archer--romain-badass-.jpeg`} alt="Archer" />
                    <h2>Archer</h2>
                </Link>
                <Link to="/mage" className="personnage">
                    <img src={`${process.env.PUBLIC_URL}/Mage.jpeg`} alt="Mage" />
                    <h2>Mage</h2>
                </Link>
                
            </div>
        </div>
    );
}

export default NewGame;
