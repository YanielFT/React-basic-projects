import { signOut } from "firebase/auth";
import {
  loginWithEmailPassword,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";
import { FirebaseAuth } from "../../firebase/config";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) dispatch(logout());
    else dispatch(login({ ...result }));
  };
};

export const startRegisterWithEmailPassword = (
  email,
  password,
  displayName
) => {
  return async (dispatch) => {
    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });
    if (!result.ok) dispatch(logout({ errorMessage: result.errorMessage }));
    else dispatch(login({ ...result }));
  };
};

export const startLoginWithEmailPassword = (
  email,
  password
) => {
  return async (dispatch) => {
    console.log(email,password);
    
    const result = await loginWithEmailPassword({
      email,
      password,
    });
    
    if (!result.ok) dispatch(logout({ errorMessage: result.errorMessage }));
    else dispatch(login({ ...result }));
  };
};

export const startSingOut = () => {
  return async(dispatch)=>{
    await signOut(FirebaseAuth); 
    dispatch(clearNotes());
    dispatch(logout());
  }
}

