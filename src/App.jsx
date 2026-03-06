import { useState } from "react";
import "./App.css";

// Component Heirarchy
/**
 *      Game
 *        => Board
 *           => Square
 *        => History
 *
 *
 */

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="bg-white border border-gray-300 h-12 w-12 m-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [XIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Yay! The Winner is: ${winner}`;
  } else {
    status = `Next player: ${XIsNext ? "X" : "O"}`;
  }

  function handleSquareClick(squareIdx) {
    const nextSquare = squares.slice();

    if (squares[squareIdx] || winner) {
      return;
    }
    nextSquare[squareIdx] = XIsNext ? "X" : "O";
    setXIsNext(!XIsNext);
    setSquares(nextSquare);
  }
  return (
    <>
      <div className="text-lg font-bold">{status}</div>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // 1st row
    [3, 4, 5], // 2nd row
    [6, 7, 8], // 3rd row
    [0, 3, 6], // 1st column
    [1, 4, 7], // 2nd column
    [2, 5, 8], // 3rd column
    [0, 4, 8], // diagonal from top-left to bottom-right
    [2, 4, 6], // diagonal from top-right to bottom-left
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // Destructure the indices of the winning line
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
