import React, { useState, ChangeEvent, FormEvent } from 'react';

import './AddTodoForm.css';

interface AddTodoFormProps {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form className='header'>
      <h1>To Do List</h1>
      <input
        type='text'
        value={newTodo}
        className='addTodo'
        onChange={handleChange}
      />
      <button type='submit' className='addBtn' onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
