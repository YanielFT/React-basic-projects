import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahí vamos...");
  }
  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, addValue } = useCounter(4000);
  const [show, setShow] = useState(true);
  const hecyStuffMemo = useMemo(() => heavyStuff(counter), [counter])
  return (
    <>
      <h1>
        Counter: <small> counter={counter}</small>
      </h1>
      <hr />

      <h4>{hecyStuffMemo}</h4>

      <button
        onClick={() => addValue()}
        type="button"
        className="btn btn-primary"
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow((prev) => !prev)}
      >
        show /hide {JSON.stringify(show)}
      </button>
    </>
  );
};
