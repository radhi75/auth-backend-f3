import { GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/authTypes";

const initialState = {
  user: {},
  errors: [],
};

const authreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.contacts };
    case LOGIN:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.contacts };
    case GET_CURRENT:
      return { ...state, user: payload.contacts };
    default:
      return state;
    case LOGOUT:
      localStorage.removeItem("token");

      return { ...state, user: null };
  }
};

export default authreducer;
