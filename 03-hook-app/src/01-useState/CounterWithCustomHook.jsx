import useCounter from "../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { addValue, reset, reduceValue, counter } = useCounter(5);
  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => addValue(5)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => reduceValue(3)}>
        -1
      </button>
    </>
  );
};

export default CounterWithCustomHook;
