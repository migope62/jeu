import React from 'react';

function TuileDomus() {
    return (
        <div
            style={{
                width: '50px', // Largeur de la tuile
                height: '50px', // Hauteur de la tuile
                backgroundColor: '#FFDAB9', // Couleur de fond pour la domus (rose clair)
                border: '1px solid #CD853F', // Bordure de la tuile (une teinte plus foncée de rose)
                /* Ajoutez d'autres styles pour personnaliser l'apparence de la tuile de domus */
            }}
        >
            {/* Vous pouvez ajouter des détails supplémentaires ici, comme des portes ou des fenêtres */}
        </div>
    );
}

export default TuileDomus;
