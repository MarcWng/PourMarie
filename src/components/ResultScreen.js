import React from 'react';
import './Pages.css';
import cat from './happy.gif'

const ResultScreen = ({ isAccepted }) => (
  <div className="background">
    <h2>
      Félicitation tu as gagné 1 co🍞
    </h2>
    <img src={cat} alt="loading..." /> 
  </div>
);

export default ResultScreen;