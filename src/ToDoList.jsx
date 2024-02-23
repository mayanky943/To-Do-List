/* eslint-disable no-unused-vars */
import React,{useState} from 'react'

const ToDoList = () => {

  const [tasks,setTasks]=useState(["Learn DSA","Learn React"]);
  const [newTask,setNewTask]=useState("");

  function handleInputChange(event){
    setNewTask(event.target.value)
  }


  function addTask(){
    if(newTask.trim()!==""){
      setTasks(t=>[...t,newTask]);
      setNewTask("");
      console.log("Task Added...",tasks.length)

    }
    
  }

  function deleteTask(index){
    const updatedTaks=tasks.filter((_,i)=> i!==index)
    setTasks(updatedTaks);
  }

  function moveTaskUp(index){
    if(index>0){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index){
    if(index<tasks.length-1){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
      setTasks(updatedTasks);
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className='to-do-list'>

      <div>
      <h1>To Do List</h1>
        <input type="text"value={newTask} onKeyDown={handleKeyDown}  onChange={handleInputChange} placeholder='Enter new task...' />
        <button type="submit" className='add-button' onClick={addTask}> Add </button>
      </div>

      <ol>
      {tasks.map((task,index)=>
        
            <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-button' onClick={()=>deleteTask(index)}>Delete</button>
            <button className='move-button' onClick={()=>moveTaskUp(index)}>☝</button>
            <button className='move-button' onClick={()=>moveTaskDown(index)}>👇</button>
          </li>
          
        )}
      </ol>
      
    </div>
  )
}

export default ToDoList