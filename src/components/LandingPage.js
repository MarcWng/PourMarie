import React from 'react';
import { motion } from 'framer-motion';
import './Pages.css';


const LandingPage = ({ onNext, toggleMute, isMuted }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="background"
  >
    <h1>Bienvenue Marie sur mon site internet que j'ai codé spécialement pour toi !</h1>

    <p>J'ai quelque chose de special à te demander...</p>
    <button onClick={onNext}>La suite ...</button>

  </motion.div>
);


export default LandingPage;
