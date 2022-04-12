import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJokeSelector } from "../store/chuck/selectors";
import { getJoke } from "../store/chuck/slice";


const Chuck = () => {
  const dispatch = useDispatch();
  const joke = useSelector(getJokeSelector);
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(getJoke());
  }, 
  []);

  return (
    <div>
      Joke Component
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder={"Joke category..."}
      />
      <button onClick={() => dispatch(getJoke(category))}>Get new joke</button>
      <p>{joke}</p>
    </div>
  );
};

export default Chuck;