import React, { useState, useEffect } from 'react';
import './App.css';
// Imported components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Hooks
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);
  const [filter,setFilter] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos,filter]);

  // Functions and Events
  const filterHandler = () => {
    switch(filter) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Local Storage
  const saveLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') !== null) {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    };
  }

  return (
    <div className="App">
       <header> 
        <h1>Kriša Todo List</h1>
       </header>
       <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} setFilter={setFilter} />
       <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
