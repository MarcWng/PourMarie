import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import InteractiveQuestion from './components/InteractiveQuestion';
import InteractiveQuestion2 from './components/InteractiveQuestion2';
import FinalMessage from './components/FinalMessage';
import ResultScreen from './components/ResultScreen';

function App() {
  const [step, setStep] = useState(1);
  const [isAccepted, setIsAccepted] = useState(false);
  const [audio] = useState(new Audio(process.env.PUBLIC_URL + '/happy happy happy.mp3'));

  const nextStep = () => setStep(step + 1);
  const handleAccept = () => {
    setIsAccepted(true);
    nextStep();
  };
  const handleReject = () => nextStep();

  useEffect(() => {
    if (step >= 5) {
      // Only start playing "happy happy happy.mp3" at step 5
      audio.play();
    } else {
      // Stop the music if it's not step 5
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [step, audio]);

  return (
    <div className="App">
      {step === 1 && <LandingPage onNext={nextStep} />}
      {step === 2 && <InteractiveQuestion onNext={nextStep} />}
      {step === 3 && <InteractiveQuestion2 onNext={nextStep} />}
      {step === 4 && <FinalMessage onAccept={handleAccept} onReject={handleReject} />}
      {step === 5 && <ResultScreen isAccepted={isAccepted} />}
    </div>
  );
}

export default App;
