import React, { useState, useContext } from 'react'
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
//import './App.css'
import { QuizContext } from './Helpers/Contexts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

function Exam() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [useTimer, setUseTimer] = useState(true);
  const [timer, setTimer] = useState(20); //Always remember to update the setTimer in the EndScreen component
  const [counter, setCounter] = useState(0);//From AnswerTimer

  return (
    <>
      <div style={{ 
      backgroundImage: 'url("path/to/your/image.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',  
    }}>
        {/* <h1>Quiz App</h1> */}
        <QuizContext.Provider value={{ gameState, setGameState, score, setScore, questions, setQuestions, useTimer, setUseTimer, timer, setTimer, counter, setCounter }}>
          {gameState === "menu" && <MainMenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "endScreen" && <EndScreen />}
        </QuizContext.Provider>
      </div>
    </>
  )
}

export default Exam;