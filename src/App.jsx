import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";
import taskReducer from "./reducers/taskReducer";

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  // get next id
  function getNextId(tasks){
    const maxId = tasks.reduce(( prev, current ) => prev && prev.id > current.id ? prev.id : current.id);
    return maxId + 1;
  }

  // handlers
  function handleAddTask(newTaskText){
    dispatch({
      type: 'added',
      id: getNextId(tasks),
      text: newTaskText
    })
  }
  
  function handleUpdateTask(updatedTask){
    dispatch({
      type: 'changed',
      task: updatedTask
    })
  }

  function handleDeleteTask(deletedTaskId){
    dispatch({
      type: 'deleted',
      id: deletedTaskId
    })
  }

  return (
    <>
        <h1>To Do List</h1>
        <AddTask onAddTask={handleAddTask}/>
        <TaskList tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask}/>
    </>
  );
}
