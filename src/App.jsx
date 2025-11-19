import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  // get next id
  function getNextId(tasks){
    const maxId = tasks.reduce(( prev, current ) => prev && prev.id > current.id ? prev.id : current.id);
    return maxId + 1;
  }

  // handlers
  function handleAddTask(newTaskText){
    setTasks([
      ...tasks,
      {id: getNextId(tasks), text: newTaskText, done: false}
    ])
  }
  
  function handleUpdateTask(updatedTask){
    const nextTasks = tasks.map( task => {
      if( task.id === updatedTask.id ){
        return updatedTask;
      } else {
        return task;
      }
    } )
    setTasks(nextTasks);
  }

  function handleDeleteTask(deletedTaskId){
    const nextTasks = tasks.filter( task => task.id !== deletedTaskId );
    setTasks(nextTasks);
  }

  return (
    <>
        <h1>To Do List</h1>
        <AddTask onAddTask={handleAddTask}/>
        <TaskList tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask}/>
    </>
  );
}
