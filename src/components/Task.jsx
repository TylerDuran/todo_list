import React from 'react'

const Task = (props) => {
    return (
        <div style={{textDecoration: props.todo.isCompleted ? "line-through" : ""}}>
                            {/* // is it a truthy value or false */}
            {props.todo.task}
            <input type="checkbox" onChange={ () => props.updateTask(props.i)} checked={props.todo.status} />
            <button onClick={() => props.deleteTask(props.i)}>Delete</button>
        </div>
    )
}

export default Task