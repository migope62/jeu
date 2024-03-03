import React from "react";
import { Link } from "react-router-dom";
import '../assets/Home.css';
import '../assets/Style.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Bienvenue dans l'Antiquité</h1>
            <p>Découvrez le monde fascinant de la Rome Antique et devenez un héros légendaire !</p>
            <Link to="./Home2">
                <button>Commencer</button>
            </Link>
        </div>
    );
}

export default Home;

