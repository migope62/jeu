import React from 'react';
import { Link } from "react-router-dom";

import '../assets/Home2.css';
import '../assets/Style.css';

function MenuPrincipal() {
    return (
        <div className='Home2-container'>
            <ul>
                <Link to="/NewGame"><li className='List'>Nouvelle partie</li></Link>
                <Link to="/page-suivante"><li className='List'>Charger partie</li></Link>
                <Link to="/page-suivante"><li className='List'>Paramètres</li></Link>
                <Link to="/page-suivante"><li className='List'>Boutique</li></Link>
            </ul>
        </div>
    );
}

export default MenuPrincipal;
