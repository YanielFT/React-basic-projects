import { memo } from "react";

// eslint-disable-next-line react/prop-types, react/display-name
export const ShowIncrement = memo(({ increment }) => {

  console.log("se esta reeconstruyendo");
    
  return (
    <button onClick={() => increment(5)} className="btn btn-primary">
      Incrementar
    </button>
  );
});
