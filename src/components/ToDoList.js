import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({todos, setTodos, filteredTodos}) => {

  return(
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <ToDo todo={todo} text={todo.text} todos={todos} setTodos={setTodos}  />
        ))}
      </ul>
    </div>
  )
}

export default ToDoList;