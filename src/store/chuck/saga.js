import { call, takeLatest, put } from "redux-saga/effects";
import ChuckService from "../../services/ChuckService";
import { getJoke, setJoke } from "./slice";

function* getJokeHandler(action) {
  const data = yield call(ChuckService.getRandomJoke, action.payload);

  yield put(setJoke(data.value));
}

export function* watchSagas() {
  yield takeLatest(getJoke.type, getJokeHandler);
}