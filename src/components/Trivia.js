import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cluesSelector } from "../store/trivia/selectors";
import { getClues, toggleAnswer } from "../store/trivia/slice";

export const Trivia = () => {
  const dispatch = useDispatch();

  const clues = useSelector(cluesSelector);

  useEffect(() => {
    dispatch(getClues());
  }, []);

  return (
    <div>
      Trivia:
      <br />
      {clues.map((clue) => (
        <div>
          <p>{clue.question}</p>
          <button onClick={() => dispatch(toggleAnswer(clue.id))}>
            Show answer
          </button>
          {clue.answerShow && <p>{clue.answer}</p>}
        </div>
      ))}
    </div>
  );
};