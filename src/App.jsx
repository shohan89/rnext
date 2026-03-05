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
  function handleSquareClick() {
    const nextSquare = squares.slice();
    nextSquare[0] = "X";
    setSquares(nextSquare);
  }
  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={handleSquareClick} />
        <Square value={squares[1]} onSquareClick={handleSquareClick} />
        <Square value={squares[2]} onSquareClick={handleSquareClick} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={handleSquareClick} />
        <Square value={squares[4]} onSquareClick={handleSquareClick} />
        <Square value={squares[5]} onSquareClick={handleSquareClick} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={handleSquareClick} />
        <Square value={squares[7]} onSquareClick={handleSquareClick} />
        <Square value={squares[8]} onSquareClick={handleSquareClick} />
      </div>
    </>
  );
}

export default Board;
