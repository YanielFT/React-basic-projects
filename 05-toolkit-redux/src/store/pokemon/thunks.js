import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonApi } from "../../api/poKemonApi";

export const getPokemon = (page = 0) => {
  return async (dispatch) => {
    //dispatch(startLoadingPokemons());

    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await resp.json();

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    console.log(data);

    // dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};

// Crear thunk asíncrono
export const getPokemon2 = createAsyncThunk(
  "pokemon/getPokemon",
  async (page = 0, { abort }) => {
    if (page < 0)  return abort("Page cannot be negative");
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    console.log(data);

    return { pokemons: data.results, page };
  }
);

