import React from "react";
import Square from "./Square";

const Board = ({ squares, handleSquareClick }) => {
  function renderSquare(_, index) {
    return (
      <Square
        onClick={() => handleSquareClick(index)}
        key={index}
        value={squares[index]}
      />
    );
  }

  return <div className="board">{squares.map(renderSquare)}</div>;
};

export default Board;
