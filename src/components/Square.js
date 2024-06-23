import React from 'react';
import './Square.css';

const Square = ({ id, color, onClick }) => {
  return (
    <button 
      className="square" 
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
    </button>
  );
};

export default Square;
