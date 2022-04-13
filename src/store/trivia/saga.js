import { call, put, takeLatest } from "redux-saga/effects";
import TriviaService from "../../services/TriviaService";
import { getClues, setClues, getCategories, setCategories } from "./slice";

function* getCluesHandler(action) {
  const data = yield call(TriviaService.getClues, action.payload);

  yield put(setClues(data));
}

function* getCategoriesHandler() {
  const data = yield call(TriviaService.getCategories);

  yield put(setCategories(data));
}

export function* watchForSagas() {
  yield takeLatest(getClues.type, getCluesHandler);
  yield takeLatest(getCategories.type, getCategoriesHandler);
}