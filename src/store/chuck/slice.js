import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getJoke: () => {},
};

const chuckSlice = createSlice({
  name: "chuck",
  initialState: {
    joke: "",
  },
  reducers: {
    setJoke: (state, action) => {
      state.joke = action.payload;
    },
    ...middlewareActions,
  },
});

export const { setJoke, getJoke } = chuckSlice.actions;

export default chuckSlice.reducer;