/* Component Hierarchy:

    Game
      => Board
        => Square
      => History

*/

import { useState } from "react";

function Square({value, onSquareClick}){

  return (
    <button 
    className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg cursor-pointer"
    onClick={onSquareClick}
    >
      {value}
    </button>
);
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;

  if(winner){
    status = `Winner: ${winner}`;
  } else{
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }

  function onSquareClick(i){
    const nextSquares = squares.slice(); //? create a copy of the squares because state is immutable. I want keep the main state unchanged.

    // if the square is already filled then it will disable
    if(nextSquares[i] || calculateWinner(squares)){
      return;
    }

    // if the first square is "X" then the next will be 'O'
    if(xIsNext){
      nextSquares[i] = 'X';
      // setXIsNext(false); // for toggle the next
    }
    else{
      nextSquares[i] = 'O';
      // setXIsNext(true); // for toggle the next
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext); // for toggle the next short form

    console.log(nextSquares[i], "No Square Clicked!");
  }

  return (
    <>
    <div>{status}</div>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => onSquareClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => onSquareClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => onSquareClick(2)}/>
      </div>

      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => onSquareClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => onSquareClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => onSquareClick(5)}/>
      </div>

      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => onSquareClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => onSquareClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => onSquareClick(8)}/>
      </div>
    </>
  );
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for( let i=0; i<lines.length; i++ ){
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
    {
      return squares[a];
    }
  }
  return null;
}