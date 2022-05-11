import './App.css';
import React, { useState } from 'react';
import Task from './components/Task';
import Form from './components/Form';

// Very Hard Assignment had to follow along with the Professor Johns demo a lot

function App() {

  const [todoList, setTodoList] = useState([
    { task: "Get Red Belt", isCompleted: false },
    { task: "Get Black Belt", isCompleted: false }
  ])

  // Creates a new task and adds to our state
  const createTask = (newTaskObj) => {
    console.log(newTaskObj);
    // This is were we add the obj to our state
    setTodoList([...todoList, newTaskObj])
  }

  // Changes the checkbox next to the task
  const updateTask = (taskIdx) => {
    console.log(taskIdx);
    const copyTask = [...todoList];
    // makes this the opposite, true to false or false to true. this is the short way 
    copyTask[taskIdx].isCompleted =  !copyTask[taskIdx].isCompleted;
    setTodoList(copyTask)
  }

  // Delete Task
  const deleteTask = (taskIdx) => {
    console.log(taskIdx);
    const todoFiltTask = todoList.filter( (todo, i) => {
      if (i === taskIdx) {
        return false
      } else {
        return true
      }
    });
    setTodoList(todoFiltTask);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        {/* {JSON.stringify(todoList)} */}
        <Form createTask={createTask}/>
        {
          todoList.map((todo, idx) => {
            return (
              <Task key={idx} todo={todo} updateTask={updateTask} i = {idx} deleteTask={deleteTask} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
