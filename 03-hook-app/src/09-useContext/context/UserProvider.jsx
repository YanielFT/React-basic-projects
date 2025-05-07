import { useState } from "react";
import { UserContext } from "./UserContext";

const DUMMY_USER = {
  id: 123,
  name: "Fernando Herrera",
  email: "fernando@google.com",
};

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(DUMMY_USER);

  return (
    <UserContext.Provider value={{ hola: "Mundo", user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
