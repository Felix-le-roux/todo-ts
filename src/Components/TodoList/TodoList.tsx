import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <ul>
      {todos.map((todo, i) => {
        return (
          <TodoListItem
            key={i + todo.text}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
