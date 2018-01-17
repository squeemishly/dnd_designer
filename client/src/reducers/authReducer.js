import * as actionTypes from "../actions/types";

const initialState = {}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

export default authReducer;
