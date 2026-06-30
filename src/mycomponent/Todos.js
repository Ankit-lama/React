import React from 'react';
import Todoitem from './Todoitem';

const Todos = (props) => {
    let mystyle = {
        minHeight: "70vh",
        margin: "40px auto"
    };
  return (
    <div className ="container" style={mystyle}> 
      <h3>To-Do List</h3>

      {props.todos.length===0 ?"No Todos to display" : props.todos.map((todo) => {
        return  <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })
        }
    </div>
  );
};

export default Todos;