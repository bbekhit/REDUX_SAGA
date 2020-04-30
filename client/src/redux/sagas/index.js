import { userSaga } from "./userSagas";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([userSaga()]);
}
