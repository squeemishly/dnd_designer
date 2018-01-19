import axios from "axios";
import * as actionTypes from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: actionTypes.FETCH_USER,
    payload: res.data
  });
};

export const fetchRace = name => async dispatch => {
  axios.get(`/api/character/race/${name}`)
    .then(response => {
      console.log("RACEYYYY: ", response)
    })
  // dispatch({
  //   type: actionTypes.FETCH_RACE_INFO,
  //   payload: res.data
  // });
};
