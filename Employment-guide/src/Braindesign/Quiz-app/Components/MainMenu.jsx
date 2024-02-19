import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import "./style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MainMenu() {
  const { gameState, setGameState, useTimer, setUseTimer, timer, setTimer } = useContext(QuizContext);
  return (
    <div className='quiz-container'>
      <div className='quiz-container2'>
        <button onClick={() => {setGameState("quiz");}}>Start Quiz</button>
        <label>
          Use Quiz Timer:
          <input type="checkbox" checked={useTimer} onChange={() => setUseTimer(!useTimer)} />
        </label>
      </div>
    </div>
  )
}