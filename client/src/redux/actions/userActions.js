import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  DELETE_USER,
  CREATE_USER,
} from "./types";

export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST,
});

export const getUsersSuccess = ({ items }) => ({
  type: GET_USERS_SUCCESS,
  payload: {
    items,
  },
});

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId,
  };
};

export const createUser = (data) => {
  return {
    type: CREATE_USER,
    payload: data,
  };
};
