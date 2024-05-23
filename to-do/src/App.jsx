import React, { useState } from "react"

function App() {
  const [toDoList, setToDoList] = useState([])
  const [newTask, setNewTask] = useState("")

  const writeTask = (event) =>{
    setNewTask(event.target.value)
  }

  const addTask = () =>{
    setToDoList([...toDoList, newTask])
  }

  const deletTask = (taskName) =>{
    setToDoList(toDoList.filter((task) => task !== taskName));
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={writeTask}></input>
        <button onClick={addTask}>Press me</button>
      </div>
      <div className="list">
        {toDoList.map((task)=>{
          return <div>
            <h1>{task}</h1>
            <button onClick={() => deletTask(task)}>Delete</button>
            </div>

        })}
      </div>
    </div>
  );
}

export default App
