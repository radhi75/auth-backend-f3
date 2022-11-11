import { FAIL, GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/authTypes";
import axios from "axios";
import { alert_errors } from "./errorAction";
export const register = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/contact/register", data);
    dispatch({ type: REGISTER, payload: res.data });
    navigate("/profile");
  } catch (error) {
    error.response.data.errors.forEach((element) => {
      dispatch(alert_errors(element.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const login = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/contact/login", data);
    dispatch({ type: LOGIN, payload: res.data });
    navigate("/profile");
  } catch (error) {
    error.response.data.errors.forEach((element) => {
      dispatch(alert_errors(element.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

export const get_current = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };

  try {
    const res = await axios.get("/contact/current", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const logout = () => {
  return { type: LOGOUT };
};