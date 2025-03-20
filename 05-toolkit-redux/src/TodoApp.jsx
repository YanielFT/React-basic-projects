import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/api/todosApi";

export const TodoApp = () => {
  // const { isLoading, isError, data: todos = [] } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { isLoading, isError, data: todo } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      {isLoading && <h4>isLoading...</h4>}
      {isError && <h4>Error loading todos</h4>}
      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};
