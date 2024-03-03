import React from 'react';

function TuileSenat() {
    return (
        <div
            style={{
                width: '50px', // Largeur de la tuile
                height: '50px', // Hauteur de la tuile
                backgroundColor: '#C0C0C0', // Couleur de fond pour le sénat (gris)
                border: '1px solid #808080', // Bordure de la tuile (une teinte plus foncée de gris)
                /* Ajoutez d'autres styles pour personnaliser l'apparence de la tuile de sénat */
            }}
        >
            {/* Vous pouvez ajouter des détails supplémentaires ici, comme des colonnes ou des dômes */}
        </div>
    );
}

export default TuileSenat;
