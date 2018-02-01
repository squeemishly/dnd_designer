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
  const res = await axios.get(`/api/character/race/${name}`);
  dispatch({
    type: actionTypes.FETCH_RACE_INFO,
    payload: res.data
  });
};

export const fetchSubRace = race => async dispatch => {
  const res = await axios.get(`/api/character/subrace/${race}`);
  dispatch({
    type: actionTypes.FETCH_SUBRACE_INFO,
    payload: res.data
  })
}

export const postCharacter = (race, subrace, klass, background, userId) => {
  return dispatch => {
    const queryParams = `?race=${race}&subrace=${subrace}&class=${klass}&background=${background}&userId=${userId}`;
    axios
      .post("/api/character/new" + queryParams)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
};
