

import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import './EndScreen.css'; // Import your custom CSS for styling

function EndScreen() {
  const { score, setScore, setGameState, questions, setQuestions, setTimer } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
    setTimer(20);
  };

  return (
    <div className='endscreen-container'>
      <div className='endscreen-content'>
        <h2 className='endscreen-heading'>Quiz Finished</h2>
        <h3 className='endscreen-result'>Result: {score} / {questions.length}</h3>
        <button className='endscreen-button' onClick={restartQuiz}>Restart Quiz</button>
      </div>
    </div>
  );
}

export default EndScreen;


