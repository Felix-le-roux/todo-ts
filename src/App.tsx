import React, { useState } from 'react';
import AddTodoForm from './Components/AddTodoForm/AddTodoForm';
import TodoList from './Components/TodoList/TodoList';

import './App.css';

const initialTodos: Array<Todo> = [
  { text: 'Feed the cat', complete: true },
  { text: 'Buy products', complete: false },
  { text: 'Take a nap', complete: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo: DeleteTodo = (selectedTodo) => {
    const newTodos = todos.filter((todo) => todo !== selectedTodo);
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== '' &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <div className='App'>
      <div className='container'>
        <React.Fragment>
          <AddTodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
