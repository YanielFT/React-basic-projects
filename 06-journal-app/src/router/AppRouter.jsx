import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoute";
import { JornaulRoutes } from "../journal/routes/JornaulRoutes";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_STATUS } from "../store/auth/types/auth";
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";
import { startLoadingNotes } from "../store/journal/thunks";
export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      dispatch(
        login({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          errorMessage: user.errorMessage,
        })
      );
      dispatch(startLoadingNotes());
    });
  }, []);

  const { status } = useSelector((state) => state.auth);
  if (status === AUTH_STATUS.checking) return <CheckingAuth />;

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoute />} />
      {status === AUTH_STATUS.authenticated && (
        <Route path="/*" element={<JornaulRoutes />} />
      )}
      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  );
};
