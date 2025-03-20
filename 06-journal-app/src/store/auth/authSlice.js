import { createSlice } from "@reduxjs/toolkit";
import { AUTH_STATUS } from "./types/auth";

const initialState = {
  status: AUTH_STATUS.checking,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = AUTH_STATUS.authenticated;
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = payload.errorMessage;
    },
    logout: (state, { payload }) => ({
      ...initialState,
      status: AUTH_STATUS.notAuhtenticated,
      errorMessage: payload?.errorMessage ?? null,
    }),
    checkingCredentials: (state) => {
      state.status = AUTH_STATUS.checking;
    },
  },
});

export const { login, logout, checkingCredentials } = AuthSlice.actions;
export default AuthSlice.reducer;
