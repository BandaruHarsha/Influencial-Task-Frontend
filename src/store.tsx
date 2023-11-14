import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./utils/Redux/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
