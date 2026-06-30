import './App.css';
import Header from './mycomponent/Header';
import Todos from './mycomponent/Todos';
import Footer from './mycomponent/Footer';
import AddTodo from './mycomponent/AddTodo';
import About from './mycomponent/About';

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    console.log("I am onDelete", todo);
    const updatedTodos = todos.filter((e) => e !== todo);
    setTodos(updatedTodos);
  };

  const addTodo = (title, desc) => {
    console.log("Adding Todo", title, desc);
    let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno,
      title,
      desc
    };

    setTodos([...todos, myTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <BrowserRouter>
      <Header title="Todos List" searchbar={false} />

      <Routes>

        <Route exact path="/" element={
          <>
            <AddTodo AddTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        } />

        <Route exact path="/about" element={<About />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;