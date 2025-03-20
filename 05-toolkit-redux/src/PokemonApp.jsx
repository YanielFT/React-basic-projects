import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon2 } from "./store/pokemon/thunks";
export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon2());
  }, [dispatch]);

  const { isLoading, pokemons, page } = useSelector((state) => state.pokemon);

  return (
    <>
      <h1>PokémonApp</h1>
      <hr />
      {isLoading && <span>Loading...</span>}
      <ul>
        {/* {pokemons.map(pokemon => ({

        }))} */}
        <li>{JSON.stringify(isLoading)}</li>
        <li>{JSON.stringify(pokemons)}</li>
        <li>{page}</li>
      </ul>

      <button
      onClick={() => dispatch(getPokemon2(page - 1))}
      disabled={isLoading}>Previous</button>
      <button
      style={{marginRight:"20px"}}
      onClick={() => dispatch(getPokemon2(page + 1))}
      disabled={isLoading}>Next</button>

    </>
  );
};
