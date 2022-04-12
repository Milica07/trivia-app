import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getClues: () => {},
};

const triviaSlice = createSlice({
  name: "trivia",
  initialState: { clues: [] },
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
    ...middlewareActions,
  },
});

export const { setClues, getClues, toggleAnswer } = triviaSlice.actions;

export default triviaSlice.reducer;