export const todoReducer = (state, action) => {
  switch (action.type) {
    case "DELETE": {
      const id = action.payload.id;
      const newState = state.filter((todo) => todo.id != id);

      return newState;
    }
    case "ADD": {
      const todo = action.payload;
      const exist = state.some(({ description }) => description == todo);
      if (exist) return state;
      const newTodo = {
        id: new Date().getTime(),
        description: todo,
        done: false,
      };
      return [...state, newTodo];
    }
    case "TOGGLE": {
      return state.map((todo) => {
        if (todo.id == action.payload.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    }

    default:
      return state;
  }
};
