import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./pokemonCard";

const MultipleCustomHook = () => {
  const { addValue, reduceValue, counter } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${+counter}`
  );
  console.log(hasError);
  return (
    <>
      <h1>Información del pokémon</h1>
      <hr />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={counter}
          name={data?.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}
      <button
        className="btn btn-primary mt-2"
        onClick={() => (counter > 1 ? reduceValue(1) : null)}
      >
        Anterior
      </button>
      <button className="btn btn-primary mt-2" onClick={() => addValue(1)}>
        Siguiente
      </button>
    </>
  );
};

export default MultipleCustomHook;
