import { END_FETCHING, START_FETCHING } from "../actions/types";

const initialState = {
  isFetching: false,
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        isFetching: true,
      };
    case END_FETCHING:
      return {
        isFetching: false,
      };
    default:
      return state;
  }
};

export default fetchReducer;
