import axios from "axios";
import axiosWithAuth from "../utilities/axiosWithAuth";

export const ACTION_NAME = "ACTION_NAME";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_TOGGLE = "FETCH_TOGGLE";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_TOGGLE });
  axios
    .get("http://localhost:5000/")
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.quote }))
    .catch(err => dispatch({ type: FETCH_TOGGLE, payload: err }));
};
