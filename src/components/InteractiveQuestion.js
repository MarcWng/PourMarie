import React from 'react';
import './Pages.css';

const InteractiveQuestion = ({ onNext, toggleMute, isMuted }) => (
  <div className="background">
    <h2>Nous avons passé des moments courts ... Mais intense n'est-ce pas ?</h2>
    <button onClick={onNext}>Oui ! 😊</button>

  </div>
);

export default InteractiveQuestion;
