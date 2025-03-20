import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [number, setNumber] = useState(value);
  const onClickHnadler = () => {
    setNumber((prev) => prev + 1);
  };
  const onSubtractHnadler = () => {
    if (number > 0) setNumber((prev) => prev - 1);
  };
  const onResetHnadler = () => {
    setNumber(value);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {number} </h2>

      <button type="button" onClick={onClickHnadler}>
        +1
      </button>
      <button type="button" onClick={onSubtractHnadler}>
        -1
      </button>
      <button type="button" onClick={onResetHnadler}>
        Reset
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
