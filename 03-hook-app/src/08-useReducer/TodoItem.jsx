import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const TodoItem = ({ id, description, onDelete, done, toggleTodo }) => {
  useEffect(() => {
    let timer;
    if (done) {
      timer = setTimeout(() => {
        onDelete(id);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [done]);

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        onClick={() => toggleTodo(id)}
        className={`align-self-center ${
          done && "text-decoration-line-through"
        }`}
      >
        {description}
      </span>
      <button className="btn btn-danger" onClick={() => onDelete(id)}>
        Borrar
      </button>
    </li>
  );
};
