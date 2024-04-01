import React, { useState, useEffect } from 'react';
import { useCharacter } from './CharacterContext';
import '../Stats/Stats.css';

const charactersData = {
    guerrier: {
        image: 'guerrier-pretorien-romain-badass-.jpeg',
        description: 'Le guerrier est un combattant redoutable, spécialisé dans le combat rapproché.'
    },
    archer: {
        image: '/archer-image.png',
        description: 'L\'archer est habile à distance, capable de toucher ses ennemis avec une grande précision.'
    },
    mage: {
        image: '/mage-image.png',
        description: 'Le mage maîtrise les arcanes de la magie, capable de lancer de puissants sorts pour infliger des dégâts à ses ennemis.'
    }
};

const CharacterStats = () => {
    const { selectedCharacter } = useCharacter();
    const [characterData, setCharacterData] = useState(null);

    useEffect(() => {
        if (selectedCharacter) {
            setCharacterData(charactersData[selectedCharacter]);
        }
    }, [selectedCharacter]);

    const [stats, setStats] = useState({
        vie: 10,
        charisme: 5,
        combat: 3,
        agilité: 2,
    });

    useEffect(() => {
        if (selectedCharacter === 'guerrier') {
            setStats({
                vie: 15,
                charisme: 8,
                combat: 10,
                agilité: 5,
            });
        } else if (selectedCharacter === 'archer') {
            setStats({
                vie: 12,
                charisme: 6,
                combat: 8,
                agilité: 12,
            });
        } else if (selectedCharacter === 'mage') {
            setStats({
                vie: 8,
                charisme: 10,
                combat: 5,
                agilité: 8,
            });
        }
        // Ajoutez d'autres conditions pour les autres personnages
    }, [selectedCharacter]);

    const handleStatChange = (stat, value) => {
        const totalStats = Object.values(stats).reduce((total, currentStat) => total + currentStat, 0);
        if (totalStats + value <= 20 && stats[stat] + value >= 0) {
            setStats({
                ...stats,
                [stat]: stats[stat] + value
            });
        }
    };

    return (
        <div className="stats-container">
            <h1>Statistiques du Personnage</h1>
            {characterData && (
                <div className="character-info">
                    <img src={characterData.image} alt="Personnage" />
                    <div className="description">
                        <h2>Description</h2>
                        <p>{characterData.description}</p>
                    </div>
                </div>
            )}
            <div className="stats">
                <div className="stat">
                    <img src="/Life.png" alt="Vie" />
                    <h2>Vie</h2>
                    <p>{stats.vie}</p>
                    <button onClick={() => handleStatChange('vie', 1)}>+</button>
                    <button onClick={() => handleStatChange('vie', -1)}>-</button>
                </div>
                <div className="stat">
                    <img src="/charisma.png" alt="Charisme" />
                    <h2>Charisme</h2>
                    <p>{stats.charisme}</p>
                    <button onClick={() => handleStatChange('charisme', 1)}>+</button>
                    <button onClick={() => handleStatChange('charisme', -1)}>-</button>
                </div>
                <div className="stat">
                    <img src="/Epee.png" alt="Combat" />
                    <h2>Combat</h2>
                    <p>{stats.combat}</p>
                    <button onClick={() => handleStatChange('combat', 1)}>+</button>
                    <button onClick={() => handleStatChange('combat', -1)}>-</button>
                </div>
                <div className="stat">
                    <img src="/Agile.png" alt="Agilité" />
                    <h2>Agilité</h2>
                    <p>{stats.agilité}</p>
                    <button onClick={() => handleStatChange('agilité', 1)}>+</button>
                    <button onClick={() => handleStatChange('agilité', -1)}>-</button>
                </div>
            </div>
        </div>
    );
};

export default CharacterStats;
