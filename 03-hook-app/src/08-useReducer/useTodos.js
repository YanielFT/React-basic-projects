import { useEffect, useReducer } from "react";
import { todoReducer } from "./todo-reducer";
const initialState = JSON.parse(localStorage.getItem("TODOS") ?? "[]");

export const useTodos = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(state));
  }, [state]);

  const onDelete = (id) => {
    dispatch({ type: "DELETE", payload: { id } });
  };
  const addTodo = (todo) => {
    dispatch({ type: "ADD", payload: todo });
  };
  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE", payload: { id } });
  };

  return {
    state,
    onDelete,
    addTodo,
    toggleTodo,
  };
};
