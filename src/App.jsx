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

function Board({ XIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);
  let status;

  if (winner) {
    status = `Yay! The Winner is: ${winner}`;
  } else if (isDraw) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${XIsNext ? "X" : "O"}`;
  }

  function handleSquareClick(squareIdx) {
    if (squares[squareIdx] || winner || isDraw) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[squareIdx] = XIsNext ? "X" : "O";
    onPlay(nextSquares);
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

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [XIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setXIsNext(true);
  }

  function handlePlay(nextSquares) {
    setXIsNext(!XIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}.`;
    } else {
      description = "Let's Start The Game!";
    }
    return (
      <li className="my-1" key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="flex flex-row gap-10 items-center justify-center h-screen">
      <div>
        {currentMove > 0 && <button onClick={resetGame}>🔄 Reset Game</button>}
        <Board XIsNext={XIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <ol>{moves}</ol>
      </div>
    </div>
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

export default Game;
