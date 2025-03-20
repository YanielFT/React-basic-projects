import { TYPES } from "../types/types";

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.login:
      return { ...state, logged: true, name: payload };

    case TYPES.logout:
      return { logged: false };

    default:
      return state;
  }
};
