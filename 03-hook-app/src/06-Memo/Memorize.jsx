import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, addValue } = useCounter();
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small counter={counter} />
      </h1>
      <hr />

      <button
        onClick={() => addValue()}
        type="button"
        className="btn btn-primary"
      >
        +1
      </button>
      <button className="btn btn-outline-primary"
      onClick={() => setShow(prev => !prev)}
      >
        show /hide {JSON.stringify(show)}
      </button>
    </>
  );
};
