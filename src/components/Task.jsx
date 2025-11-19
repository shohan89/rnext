import { useState } from "react";

export default function Task({ task, onDeleteTask, onUpdateTask }) {
    const [isEditing, setIsEditing] = useState(false);

    let content;

    if(isEditing){
        content = <>
            <input value={task.text} onChange={(e) => {
                onUpdateTask({
                    ...task,
                    text: e.target.value
                })
            }} /> {' '}
            <button onClick={() => setIsEditing(false)}>Save</button>
        </>
    } else {
        content = <>
            {task.text} {' '}
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
    }
  return (
    <li>
            <label>
              <input type="checkbox" checked={task.done} onChange={(e) => {
                onUpdateTask({
                    ...task,
                    done: e.target.checked
                })
              }} />
              {content} {' '}
              <button onClick={()=> onDeleteTask(task.id)}>Delete</button>
            </label>
          </li>
  )
}
