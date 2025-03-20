import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const AddForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("")
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="form-control"
        placeholder="Qué hay que hacer?"
      />
      <button type="submit" 
      className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};
