import { useState } from 'react'
import './App.css'

function App() {
    const [formValues, updateFormValues] = useState({})

    const handleChange = (e) =>{
        updateFormValues({...formValues, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Insert your task</h1>
                <div className="taskName-input">
                    <label htmlFor="taskName">Task Name: </label>
                    <input type="text" id="taskName" value={formValues.taskName || ""} onChange={handleChange}/>
                </div>
                <div className="taskDesc-input">
                    <label htmlFor="taskDescription">Task Description: </label>
                    <input type="text" id = "taskDesc" value={formValues.taskDesc || ""} onChange={handleChange}/>
                </div>
                <button type="submit" id="submit-bttn">Submit</button>
            </form>

        </>
    )
}

export default App
