import './ToDoWrapper.css';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { useState } from 'react';
function ToDoWrapper() {
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    setTasks([...tasks, {title: newTask, isComplete: false}])
  }

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks)
  }

  const updateTask = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return {...task, isComplete: !task.isComplete}
      }
      return task
    })
    setTasks(updatedTasks)
  }
  return (
    <>
      <ToDoForm addTask={addTask}/>
      {/* <ToDoList /> */}
      {/* Form */}
      
      {/* List */}
      <div className='items p-5 '>
        {tasks.map((task, index) => {
          return (
          <div key={index}>
            <ToDoList task={task} index={index} deleteTask={deleteTask} updateTask={updateTask}/>
          </div>
          )
        })}
      </div>
    </>
  )
}

export default ToDoWrapper