import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>HomePage {user.name}</h1>
      <hr />

      <button
        type="button"
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, name: "Juan", email: "juan@gmail.com" })
        }
      >
        Set user
      </button>
    </>
  );
};
