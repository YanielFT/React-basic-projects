import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { TYPES } from "../types/types";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    name: user?.name,
  };
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const action = { type: TYPES.login, payload: name };
    localStorage.setItem(
      "user",
      JSON.stringify({ id: new Date().getTime(), name: name })
    );
    authDispatch(action);
  };

  const logout = () => {
    const action = { type: TYPES.logout };
    localStorage.removeItem("user")
    authDispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
