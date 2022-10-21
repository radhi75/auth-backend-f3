import { ALERT_ERRORS, CLEAR_ERRORS } from "../ActionTypes/errorsTypes";

const initialState = [];

const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALERT_ERRORS:
      return [...state, payload];
    case CLEAR_ERRORS:
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
};
export default errorReducer;
