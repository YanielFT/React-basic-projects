import { memo } from "react";

// eslint-disable-next-line react/prop-types, react/display-name
export const Small = memo(({ counter }) => {
  console.log(" me volvi a reflejar");
  return <small>{counter}</small>;
});
