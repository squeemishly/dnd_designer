import * as actionTypes from "../actions/types";
import { updateObject } from '../utility';

const initialState = {};

const characterReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case actionTypes.FETCH_RACE_INFO:
      return {
        ...state,
        character: action.payload
      };
      case actionTypes.FETCH_RACE_DETAILS:
      return updateObject( state, {
        subraces: action.payload.subraces,
        backgrounds: action.payload.backgrounds
      })
    default:
      return state;
  }
};

export default characterReducer;
