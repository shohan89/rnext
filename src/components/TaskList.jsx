import Task from "./Task";

export default function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  return (
    <ul>
          {
            tasks.map( task => <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask}/> )
          }
    </ul>
  )
}
