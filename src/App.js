import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);

  const [newTask, setNewTask] = useState("");
  
  const handleChange = (e)=>{
    setNewTask(e.target.value)
  }

  const addTask =() =>{
    // const newTodoList = [...todoList, newTask]
    // setTodoList(newTodoList);

    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName: newTask,
    };

    setTodoList([...todoList, task])
  }

  const deleteTask=(taskID)=>{
    const newTodoList = todoList.filter((task)=>{
      if(task.id === taskID){
        return false
      }
      else{
        return true
      }
    })
    // const newTodoList = todoList.filter((task) => task!= taskName);
    setTodoList(newTodoList)
  } 
  return (
  <div className='App'>
    <div className='addTask'>
      <input onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
    </div>
    <div className='list'> 
      {
      todoList.map((task)=>{
        return(
          <div className='task-list'>
            
            <li className='task-list-element'>{task.taskName}</li>
            <button type="" onClick={()=>deleteTask(task.id)}>Remove Task</button>
          </div>
        )
      })
      }
    </div>
    
  </div>
  );
}

export default App;
