import { useLayoutEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
export const PokemonCard = ({ id, name, sprites = [] }) => {
  const pRef = useRef();
  useLayoutEffect(() => {
    pRef.current.getboundingClientRect();
  }, []);

  return (
    <section style={{ height: 200, display: "flex" }}>
      <h2 ref={pRef} className="text-capitalize">
        #{id} - {name}
      </h2>
      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={`sprite - ${name}`} />
        ))}
      </div>
    </section>
  );
};
