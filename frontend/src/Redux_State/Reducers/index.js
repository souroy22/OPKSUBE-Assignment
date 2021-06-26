import { combineReducers } from "redux";
import BookReduer from "./BookReduer";
import authReducer from "./authReducer";
import OrderReduer from "./OrderReducer";

const rootReducer = combineReducers({
  BookReduer,
  authReducer,
  OrderReduer,
});

export default rootReducer;
