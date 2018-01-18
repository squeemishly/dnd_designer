import * as actionTypes from "../actions/types";

const initialState = {}

const characterReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_RACE_INFO:
      return {
        ...state,
        race: action.payload
      }
    default:
      return state;
  }
}

export default characterReducer;
