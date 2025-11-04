/* Component Hierarchy:

    Game
      => Board
        => Square
      => History

*/

function Square({ value }){
  function handleClick() {
    console.log('Button clicked!')
  }
  return (
  <button 
  className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg cursor-pointer"
  onClick={handleClick}
  >
    {value}
  </button>
);
}

export default function Board() {

  return (
    <>
      <div>
        <Square value={1}/>
        <Square value={2}/>
        <Square value={3}/>
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
