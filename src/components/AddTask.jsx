import { useState } from "react";

export default function AddTask({ onAddTask }) {
    const [newTaskText, setNewTaskText] = useState('');
  return (
    <>
        <input placeholder="Add Task" value={newTaskText} onChange={(e)=> {
            setNewTaskText(e.target.value);
        }} />
        <button onClick={() => {
            onAddTask(newTaskText);
            setNewTaskText('');
        }}>Add</button>
    </>
  )
}
