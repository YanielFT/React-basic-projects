const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

const addTodoAction = {
  type: "TODO",
  payload: newTodo,
};

let todos = todoReducer(initialState, addTodoAction);
console.log(todos);
