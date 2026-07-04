import react, { useState } from 'react';
import './index.css';

function ToDo() {
const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);
const [newTask, setNewTask] = useState('');

function handleInputChanges(event) {
 setNewTask(event.target.value);
}

function handleAddTasks() {
 if (newTask.trim() !== '') {
  setTasks(t => [...t, newTask]);
  setNewTask('');
 }
}

function handleDeleteTasks(index) {
    const updatedTasks = tasks.filter((_ , i) => i !== index);
    setTasks(updatedTasks);
}

function handleMoveUp(index) {
    if(index > 0) {
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index-1]] = 
        [updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
}

function handleMoveDown(index) {
 if(index < tasks.length -1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index+1]] = 
        [updatedTasks[index+1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
}

return(
   <div className="ToDo">
    <h1>To-Do List</h1>
    <div>
    <input type="text" value={newTask} onChange={handleInputChanges} placeholder="Enter a new task" />
    <button className='addtasks' onClick={handleAddTasks}>Add Task</button>
   </div> 
   <ol>
    {
        tasks.map((task, index) => (
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='delete' onClick={() => handleDeleteTasks(index)}>Delete</button>
                <button className='move' onClick={() => handleMoveUp(index)}>Up</button>
                <button className='move' onClick={() => handleMoveDown(index)}>Down</button>
            </li>
        ))
    }
   </ol>
   </div>
);
}

export default ToDo;