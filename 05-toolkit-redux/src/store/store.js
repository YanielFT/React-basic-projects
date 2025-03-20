import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "./slices/counterSlice";
import pokemonReducer from "./pokemon/PokemonSlice";
import { todosApi } from "./api/todosApi";

export const store = configureStore({
  reducer: {
    counter: counterReduce,
    pokemon: pokemonReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
