import React, { useState, useEffect } from 'react';
import Chessboard from './components/Chessboard';
import './App.css';

const generateRandomSquare = () => {
  const rows = 'abcdefgh';
  const cols = '12345678';
  const row = rows[Math.floor(Math.random() * 8)];
  const col = cols[Math.floor(Math.random() * 8)];
  return `${row}${col}`;
};

function App() {
  const [currentSquare, setCurrentSquare] = useState(generateRandomSquare());
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (showFeedback) {
      const timer = setTimeout(() => {
        setShowFeedback(false);
        if (feedback === 'Correct') {
          setCurrentSquare(generateRandomSquare());
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showFeedback, feedback]);

  const handleSquareClick = (id) => {
    const clickedSquare = `${String.fromCharCode(97 + (id % 8))}${Math.floor(id / 8) + 1}`;
    if (clickedSquare === currentSquare) {
      setFeedback('Correct');
    } else {
      setFeedback('Try again');
    }
    setShowFeedback(true);
  };

  return (
    <div className="App">
      <div className="question-feedback">
        <div className="question">Which square is {currentSquare}?</div>
      </div>
      <Chessboard onSquareClick={handleSquareClick} />
      <div className="feedback-container">
        <div className={`feedback ${showFeedback ? 'visible' : 'hidden'} ${feedback === 'Correct' ? 'correct' : 'incorrect'}`}>
          {feedback}
        </div>
      </div>
    </div>
  );
}

export default App;
