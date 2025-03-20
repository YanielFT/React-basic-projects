import { TodoList } from "./TodoList";
import { AddForm } from "./AddForm";
import { useTodos } from "./useTodos";

export const TodoApp = () => {
  const { state, addTodo, onDelete, toggleTodo } = useTodos();

  const total = state?.length ?? 0;
  return (
    <>
      <h1>
        Todos ({total}) Pendientes (
        {total > 0 ? state?.filter((todo) => todo.done).length : 0})
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={state} onDelete={onDelete} toggleTodo={toggleTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <AddForm addTodo={addTodo} />
        </div>
      </div>
    </>
  );
};
