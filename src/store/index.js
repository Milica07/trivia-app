import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga/";
import sagas from "./rootSaga";
import chuck from "./chuck/slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {chuck},
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

export default store;