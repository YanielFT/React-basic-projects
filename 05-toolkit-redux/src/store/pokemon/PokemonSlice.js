import { createSlice } from "@reduxjs/toolkit";
import { getPokemon2 } from "./thunks";

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemon2.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPokemon2.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pokemons = action.payload.pokemons;
        state.page = action.payload.page;
      })
      .addCase(getPokemon2.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default pokemonSlice.reducer;
