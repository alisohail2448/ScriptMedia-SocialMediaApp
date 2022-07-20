import { combineReducers } from "redux";

import authReducer from "./authReducer";
import postReducer from "./postReducer";
// import chatReducer from "./ChatUserReducer";
// chatReducer
export const reducers = combineReducers({authReducer, postReducer})