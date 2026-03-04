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

function Square() {
  return (
    <button className="bg-white border border-gray-300 h-12 w-12 m-1 leading-9 text-lg">
      X
    </button>
  );
}

function Board() {
  return (
    <>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default Board;
