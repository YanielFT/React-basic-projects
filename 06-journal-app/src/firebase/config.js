// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4E_ti6iRRpljN5vGpaS1qkyRbc2r3LIU",
  authDomain: "react-cursos-bd651.firebaseapp.com",
  projectId: "react-cursos-bd651",
  storageBucket: "react-cursos-bd651.firebasestorage.app",
  messagingSenderId: "188206278138",
  appId: "1:188206278138:web:fc8273e0940acb9a26b043",
  measurementId: "G-E15M5PK7JE"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
