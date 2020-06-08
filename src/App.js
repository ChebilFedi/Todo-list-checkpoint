import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
const list = [ 'shopping' ,  'going to the grocery shop' ,  'important meeting at 12' ];
function App() {
  const [task, setTask] = useState(list);
  const [newTask, setNewTask] = useState('')

  function change(event) {
    setNewTask(event.target.value)
  }
  function add() {


    setTask([...task, newTask]);

  }
  function remove(el) {

    setTask(task.filter((element) => element!== el));
  }

  
  const edit = (el) => {
    return (setTask(task.map((element)=>(element==el)?newTask:element)))
  }
  

  return (
    <div className="App">
      <h1 style={{fontWeight:'Bold', color:'Blue'}}>Today's Tasks</h1>
      <div className="taskList">
      
      <ul>
        {task.map((el, i) => (
          <li key={el} style={{fontWeight:'bold'}}>{el} <Button variant="primary" type='button' onClick={() => remove(el)} >remove</Button> <input type='text' size='40' onChange={change} placeholder='wanna change something ?' />
          <Button type='button' variant="primary " onClick={() => edit(el)} >Edit task</Button> </li>))}

      </ul>
      </div>
      <div className="change">
        <input type='text' onChange={change} placeholder='add a task' />
        <Button type='button' onClick={add} >Add task</Button>
      </div>

    </div>
  );
}

export default App;
