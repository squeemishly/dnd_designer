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
    case actionTypes.FETCH_SUBRACE_INFO:
      const subraceList = action.payload.map(subrace => subrace.name)
      return {
        ...state,
        subraces: subraceList
      };
    default:
      return state;
  }
};

export default characterReducer;
