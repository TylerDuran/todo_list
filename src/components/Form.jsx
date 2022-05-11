import React, {useState} from 'react'

const Form = (props) => {

    const [newTask, setNewTask] = useState("")

    const submitNewTask = (e) => {
        e.preventDefault();
        // console.log(newTask);
        const newTaskObj = {task: newTask}
        // console.log(newTaskObj);

        props.createTask(newTaskObj);


    }


    return (
        <div>
            <form onSubmit={submitNewTask}>
                <input onChange={ (e) => {setNewTask(e.target.value)} } value={newTask} />
                <br></br>
                <button style={{backgroundColor: "blue", marginRight: "95px", marginTop: "10px", color: "white", height: "30px", width: "60px"}}>Add</button>
            </form>
        </div>
    )
}

export default Form