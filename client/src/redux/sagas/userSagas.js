import { takeEvery, takeLatest, call, fork, put } from "redux-saga/effects";
import api from "../api/api";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  END_FETCHING,
  START_FETCHING,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  CREATE_USER,
  CREATE_USER_SUCCESS,
} from "../actions/types";

function* getUsersSaga() {
  try {
    const users = yield call(api.user.getUsers);
    console.log(users);
    yield put({ type: GET_USERS_SUCCESS, payload: users.data.data });
  } catch (error) {
    yield put({ type: GET_USERS_ERROR, payload: error });
  }
}

function* deleteUserSaga({ payload }) {
  try {
    yield call(api.user.deleteUser, payload);
    yield put({ type: DELETE_USER_SUCCESS, payload });
  } catch (error) {}
}

function* createUserSaga({ payload }) {
  const newUser = {
    firstName: payload.firstName,
    lastName: payload.lastName,
    id: 10000000,
  };

  try {
    yield call(api.user.createUser, newUser);
    yield put({ type: CREATE_USER_SUCCESS, payload: newUser });
  } catch (error) {}
}

export function* userSaga() {
  yield takeLatest(GET_USERS_REQUEST, getUsersSaga);
  yield takeLatest(DELETE_USER, deleteUserSaga);
  yield takeLatest(CREATE_USER, createUserSaga);
}

// action
// commentsList: (param, ids) => ({
//   type: types.COMMENT_LIST,
//   payload: { param, ids },
// }),

// function* commentsListSaga({ payload }) {
//   try {
//     const comments = yield call(API.comment.list, payload);
//     yield put({ type: types.COMMENT_LIST_OK, payload: comments });
//   } catch (err) {
//     yield put({ type: types.COMMENT_LIST_FAILED, payload: { error: err } });
//   }
// }

// export function* commentSaga() {
//   yield takeLatest(types.COMMENT_CREATE, commentCreateSaga);
//   yield takeLatest(types.COMMENT_PATCH, commentModifySaga);
//   yield takeLatest(types.COMMENT_DELETE, commentDeleteSaga);
//   yield takeEvery(types.COMMENT_LIST, commentsListSaga);
//   yield takeLatest(types.COMMENT_REFRESH, commentsRefreshSaga);
// }

// export function* sagas() {
//   yield all([
//     commentSaga(),
//   ]);
// }

// *************************************************************************************
// action
// commentRemove: (content) => ({ type: types.COMMENT_DELETE, payload: content }),

// action in component
// remove = (comment, id) => {
//   const {
//     commentRemove,
//     parentId,
//     type,
//   } = this.props;
//   commentRemove({
//     comment,
//     type,
//     parentId,
//     id,
//   });
// }

// export function* commentSaga() {
//   yield takeLatest(types.COMMENT_DELETE, commentDeleteSaga);
// }

// function* commentDeleteSaga({ payload }) {
//   const {
//     comment,
//     type,
//     parentId,
//     id,
//   } = payload;
//   try {
//     const removedId = yield call(API.comment.remove, comment);
//     yield put({ type: types.COMMENT_DELETE_OK, payload: removedId });
//     yield put({ type: types.COMMENT_FORM_HIDE, payload: { type, parentId, id } });
//     yield put({ type: types.COMMENT_ERROR_HIDE, payload: { type, parentId, id } });
//   } catch (err) {
//     yield put({ type: types.COMMENT_DELETE_FAILED, payload: { error: err } });
//     yield put({ type: types.COMMENT_ERROR_SHOW, payload: { type, parentId, id } });
//   }
// }
