import { useState } from 'react';
import '../index.css';
export default function Counter({ person }) {
    const [hover, setHover] = useState(false);
    const [count, setCount] = useState(0);

  let className = 'counter';
  if(hover){
    className += ' hover'
  }

  return (
    <div
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      className={className}
    >
      <h1>{person}'s score: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Add one
      </button>
    </div>
  );
}