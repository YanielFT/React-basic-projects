import { useRef } from "react";

export const FocusScreen = () => {
  const onClick = () => {
    inputRef.current.select();
  };
  const inputRef = useRef();
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        className="form-control"
        type="text"
        placeholder="Type your name"
      />
      <input
        ref={inputRef}
        className="form-control"
        type="text"
        placeholder="Type your name"
      />

      <button type="button" className="btn btn-primary mt-2" onClick={onClick}>
        Set focus
      </button>
    </>
  );
};
