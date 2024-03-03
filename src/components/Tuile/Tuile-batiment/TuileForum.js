import React from 'react';

function TuileForum() {
    return (
        <div
            style={{
                width: '50px', // Largeur de la tuile
                height: '50px', // Hauteur de la tuile
                backgroundColor: '#F0E68C', // Couleur de fond pour le forum (jaune clair)
                border: '1px solid #DAA520', // Bordure de la tuile (une teinte plus foncée de jaune)
                /* Ajoutez d'autres styles pour personnaliser l'apparence de la tuile de forum */
            }}
        >
            {/* Vous pouvez ajouter des détails supplémentaires ici, comme des colonnes ou des statues */}
        </div>
    );
}

export default TuileForum;
