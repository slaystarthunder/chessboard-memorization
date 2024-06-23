import React from 'react';
import Square from './Square';
import './Chessboard.css';

const Chessboard = ({ onSquareClick }) => {
  const renderSquare = (i) => {
    const isBlack = (Math.floor(i / 8) + i % 8) % 2 === 1;
    const color = isBlack ? 'black' : 'white';
    return <Square key={i} id={i} color={color} onClick={() => onSquareClick(i)} />;
  };

  const createChessboard = () => {
    let board = [];
    for (let row = 7; row >= 0; row--) {  // Flip the board by reversing the row order
      let squares = [];
      for (let col = 0; col < 8; col++) {
        squares.push(renderSquare(row * 8 + col));
      }
      board.push(<div key={row} className="board-row">{squares}</div>);
    }
    return board;
  };

  return (
    <div className="chessboard">
      {createChessboard()}
    </div>
  );
};

export default Chessboard;
