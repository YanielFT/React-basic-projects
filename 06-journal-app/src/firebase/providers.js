import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    //const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    const user = result.user;
    const { displayName, email, photoURL, uid } = user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email: emailToSend,
  password,
  displayName,
}) => {
  try {

    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      emailToSend,
      password
    );
    console.log(result);

    //const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    const user = result.user;
    const { email, photoURL, uid } = user;
    await updateProfile(FirebaseAuth.currentUser, { displayName });
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage = error.message;
    console.log(errorMessage);

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const loginWithEmailPassword = async ({
  email: emailToSend,
  password,
}) => {
  try {
    console.log('loginWithEmailPassword');
    console.log(password);
    
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      emailToSend,
      password
    );
    console.log(result);
    const user = result.user;
    const { email, photoURL, uid, displayName } = user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage = error.message;
    console.log(errorMessage);

    return {
      ok: false,
      errorMessage,
    };
  }
};
