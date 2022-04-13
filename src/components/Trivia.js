import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cluesSelector, categoriesSelector } from "../store/trivia/selectors";
import { getClues, toggleAnswer, getCategories } from "../store/trivia/slice";

export const Trivia = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");

  const clues = useSelector(cluesSelector);
  const categories = useSelector(categoriesSelector);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(getClues(selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div>
      Trivia:
      <br />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="" />
        {categories.map((cateogry) => (
          <option value={cateogry.id}>{cateogry.title}</option>
        ))}
      </select>
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