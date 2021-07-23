import React from 'react';
import './TodoListItem.css';
import { FiTrash2 } from 'react-icons/fi';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li
      className={todo.complete ? 'todoListItem complete' : 'todoListItem'}
      onClick={() => toggleTodo(todo)}
    >
      <label>{todo.text}</label>
      <span
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo);
        }}
      >
        <FiTrash2 className='delete' />
      </span>
    </li>
  );
};

export default TodoListItem;
