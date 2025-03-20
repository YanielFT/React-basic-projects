import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  const lastPath = pathname + search;

  useEffect(() => {
    localStorage.setItem("lastPath", lastPath);
    console.log('re-render'); 
  }, [lastPath]);
  return logged ? children : <Navigate to={"/login"} />;
};
