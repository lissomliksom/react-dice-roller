import { useState, useEffect } from "react";

import DiceContainer from "./components/DiceContainer";
import DiceButton from "./components/DiceButton";

import DiceThrowMultiple from './assets/audio/KenneyDiceThrowMultiple.ogg';
import DieThrowSingle from './assets/audio/KenneyDieThrowSingle.ogg';

function App() {
  const [diceValue, setDiceValue] = useState([1, 1]);
  const [isRolling, setIsRolling] = useState([false, false]);

  const playAudio = (audio) => {
    const soundClip = new Audio(audio);
    soundClip.play();
  };

  const animateAllDice = () => {
    setIsRolling([true, true]);
    setTimeout(() => {
      setIsRolling([false, false]);
    }, 500);
  };

  const rollAllDice = () => {
    animateAllDice();
    playAudio(DiceThrowMultiple);
    setTimeout(() => {
      setDiceValue([Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]);
    }, 200);
  };

  const handleButtonClick = () => {
    rollAllDice()
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center space-y-5">

      <DiceContainer 
        diceValue={diceValue} 
        setDiceValue={setDiceValue} 
        isRolling={isRolling} 
        setIsRolling={setIsRolling} 
        selectedDie={selectedDie}
        setSelectedDie={setSelectedDie}
      />

      <DiceButton action={handleButtonClick}/>
      
      </div>
    </div>
  );
}

export default App;
