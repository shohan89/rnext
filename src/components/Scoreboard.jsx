import { useState } from 'react';
import Counter from './Counter';

export default function Scoreboard() {
    const [playerA, setPlayerA] = useState(false);
  return (
    <div>
        {playerA && <Counter person={'Taylor'} />}
        {!playerA && <Counter person={'Sara'} />}
        <button onClick={() => setPlayerA(!playerA)}>Next Player!</button>
    </div>
  )
}
