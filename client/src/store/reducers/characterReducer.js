import * as actionTypes from "../actions/types";

const initialState = {};

const characterReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case actionTypes.FETCH_RACE_INFO:
      return {
        ...state,
        character: action.payload
      };
    default:
      return state;
  }
};

export default characterReducer;
