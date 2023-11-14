import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "./states";

const initialState = userInitialState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isLoggedIn = true;
      state.userDetails = action?.payload?.userDetails;
    },
    signOut: (state) => {
      state.isLoggedIn = false;
      state.userDetails = null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
