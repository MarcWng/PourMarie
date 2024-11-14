import React from 'react';
import { motion } from 'framer-motion';
import './Pages.css';

const FinalMessage = ({ onAccept }) => {
  const handleRejectHover = (e) => {
    // Calculate random position for the "Non" button
    const randomX = Math.floor(Math.random() * 200) - 100; // Range between -100 and +100
    const randomY = Math.floor(Math.random() * 100) - 50;  // Range between -50 and +50

    // Apply the new position with framer-motion's animate prop
    e.target.style.transform = `translate(${randomX}px, ${randomY}px)`;
  };

  return (
    <div className="background">
      <h2>Je ne t'avais pas fait la demande officielle alors la voici : Veux-tu devenir ma copine ? 💖</h2>

      <motion.button
        whileHover={{ x: [0, -10, 10, -10, 10, 0] }}
        onClick={onAccept}
      >
        Oui
      </motion.button>

      <motion.button
        onHoverStart={handleRejectHover} // Trigger random move on hover
        onClick={handleRejectHover} // Ensure it logs "lol" when clicked
      >
        Non (Essaie de m'attraper 😉)
      </motion.button>

    </div>
  );
};

export default FinalMessage;