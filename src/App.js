import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importez Routes

import Home from './pages/Home';
import Home2 from './pages/Home2';
import NewGame from './pages/NewGame';
import CardGame from './components/Carte/Cartejeu';


function App() {
  return (
    <Router>
      <Routes> {/* Utilisez Routes */}
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/Home2" element={<Home2 />} /> 
        <Route exact path="/NewGame" element={<NewGame />} /> 
        <Route exact path="/Carte" element={<CardGame />} /> 

        {/* Ajoutez d'autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
