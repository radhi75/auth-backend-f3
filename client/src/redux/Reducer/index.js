import { combineReducers } from "redux";
import authreducer from "./authreducer";
import errorReducer from "./errorReducer";
const rootReducer = combineReducers({ authreducer, errorReducer });
export default rootReducer;
