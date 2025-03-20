import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const addValue = (value = 1) => setCounter((prev) => prev + value);
  const reduceValue = (value = 1) => setCounter((prev) => prev - value);
  const reset = () => setCounter(initialValue);

  return {
    addValue,
    reduceValue,
    reset,
    counter,
  };
};


