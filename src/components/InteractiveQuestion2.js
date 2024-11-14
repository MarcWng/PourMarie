import React from 'react';
import './Pages.css';

const InteractiveQuestion2 = ({ onNext}) => (
  <div className="background">
    <h2>Je pense que tu t'en doute, mais je suis amoureux de toi ...</h2>
    <button onClick={onNext}>OH ! 😊</button>
  </div>
);

export default InteractiveQuestion2;
