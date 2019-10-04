import axios from "axios";
import axiosWithAuth from "../utilities/axiosWithAuth";

export const ACTION_NAME = "ACTION_NAME";
export const AXIOS_SUCCESS = "FETCH_SUCCESS";
export const AXIOS_TOGGLE = "AXIOS_TOGGLE";

export const login = () => dispatch => {
  dispatch({ type: AXIOS_TOGGLE });
  axiosWithAuth();
};
