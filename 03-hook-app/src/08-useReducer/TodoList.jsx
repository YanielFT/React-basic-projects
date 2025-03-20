import { TodoItem } from "./Todoitem";

// eslint-disable-next-line react/prop-types
export const TodoList = ({ todos = [], onDelete, toggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map(({ id, description, done }) => (
        <TodoItem
          id={id}
          key={id}
          toggleTodo={toggleTodo}
          done={done}
          description={description}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
