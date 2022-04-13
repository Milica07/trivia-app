import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getClues: () => {},
  getCategories: () => {},
};

const triviaSlice = createSlice({
  name: "trivia",
  initialState: { clues: [], categories: [] },
  reducers: {
    setClues: (state, action) => {
      state.clues = action.payload;
    },
    toggleAnswer: (state, action) => {
      state.clues = state.clues.map((clue) =>
        clue.id === action.payload
        ? { ...clue, answerShow: !clue.answerShow }
        : clue
      );
    },
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
    ...middlewareActions,
  },
});

export const { setClues, getClues, toggleAnswer, getCategories, setCategories } = triviaSlice.actions;

export default triviaSlice.reducer;