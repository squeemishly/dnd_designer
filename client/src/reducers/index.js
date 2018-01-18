import { combineReducers } from "redux";

import authReducer from "./authReducer";
import characterReducer from './characterReducer';

export default combineReducers({
  auth: authReducer,
  charas: characterReducer
});
