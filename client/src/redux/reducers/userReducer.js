import {
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
  GET_USERS_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  CREATE_USER,
  CREATE_USER_SUCCESS,
} from "../actions/types";

const initialState = {
  items: [],
  error: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default userReducer;
