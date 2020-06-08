import React, { useState } from 'react';

import './App.css';
const list = [{ id: 0, taskName: 'shopping' }, { id: 1, taskName: 'going to the grocery shop' }, { id: 2, taskName: 'important meeting at 12' }];
function App() {
  const [task, setTask] = useState(list);
  const [newTask, setNewTask] = useState('')

  function change(event) {
    setNewTask(event.target.value)
  }
  function add() {


    setTask([...task, newTask]);

  }
  function remove(id) {

    setTask(task.filter((el) => el.id !== id));
  }

  const edit = (id) => {
    return (setTask(task.map((el)=>el.id.taskName==newTask)))
  }

  return (
    <div className="App">
      <ul>
        {task.map((el, i) => (
          <li key={el}>{el.taskName} <button type='button' onClick={() => remove(el.id)} >remove</button> <input type='text' onChange={change} />
            <button type='button' onClick={() => edit(el.id)} >Edit task</button></li>))}

      </ul>
      <div>
        <input type='text' onChange={change} />
        <button type='button' onClick={add} >Add task</button>
      </div>

    </div>
  );
}

export default App;
