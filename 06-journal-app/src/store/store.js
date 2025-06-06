import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/authSlice";
import journalReducer from "./journal/journalSlice";

export const store = configureStore({
  reducer: { auth: AuthReducer, journal: journalReducer },
});
