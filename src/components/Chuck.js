import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJokeSelector } from "../store/chuck/selectors";
import { getJoke } from "../store/chuck/slice";

const Chuck = () => {
  const dispatch = useDispatch();
  const joke = useSelector(getJokeSelector);

  useEffect(() => {
    dispatch(getJoke());
  }, 
  []);

  return (
    <div>
      Joke Component
      <p>{joke}</p>
    </div>
  );
};

export default Chuck;