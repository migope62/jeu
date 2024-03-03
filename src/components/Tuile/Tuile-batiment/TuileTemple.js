import React from 'react';

function TuileTemple() {
    return (
        <div
            style={{
                width: '50px', // Largeur de la tuile
                height: '50px', // Hauteur de la tuile
                backgroundColor: '#FA8072', // Couleur de fond pour le temple (saumon)
                border: '1px solid #CD5C5C', // Bordure de la tuile (une teinte plus foncée de saumon)
                /* Ajoutez d'autres styles pour personnaliser l'apparence de la tuile de temple */
            }}
        >
            {/* Vous pouvez ajouter des détails supplémentaires ici, comme des colonnes ou des statues */}
        </div>
    );
}

export default TuileTemple;
