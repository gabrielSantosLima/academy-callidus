import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleSquareClick(index) {
    const newSquares = squares.map((square, currentIndex) => {
      if (index == currentIndex) return xIsNext ? "X" : "O";
      return square;
    });
    setXIsNext(!xIsNext);
    setSquares(newSquares);
  }

  function isGameOverInRow() {
    for (let index = 0; index < 9; index += 3) {
      if (
        squares[index] === squares[index + 1] &&
        squares[index + 1] === squares[index + 2] &&
        squares[index] !== null &&
        squares[index + 1] !== null &&
        squares[index + 2] !== null
      )
        return true;
    }
    return false;
  }

  function isGameOverInColumn() {
    for (let index = 0; index < 3; index++) {
      if (
        squares[index] === squares[index + 3] &&
        squares[index + 3] === squares[index + 6] &&
        squares[index] !== null &&
        squares[index + 3] !== null &&
        squares[index + 6] !== null
      )
        return true;
    }
    return false;
  }

  function isGameOverInDiagonal() {
    if (
      (squares[0] === squares[4] &&
        squares[4] === squares[8] &&
        squares[0] &&
        squares[4] &&
        squares[8]) ||
      (squares[2] === squares[4] &&
        squares[4] === squares[6] &&
        squares[2] &&
        squares[4] &&
        squares[6])
    )
      return true;
    return false;
  }

  function isGameOver() {
    if (isGameOverInRow() || isGameOverInColumn() || isGameOverInDiagonal())
      return true;
    return false;
  }

  if (isGameOver()) {
    const player = xIsNext ? "O" : "X";
    alert(`Jogador ${player} venceu!!`);
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    return;
  }

  return (
    <div className="game">
      <h1>Jogador atual: {xIsNext ? "X" : "O"}</h1>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default Game;
