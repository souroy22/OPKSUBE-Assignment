import { combineReducers } from "redux";
import BookReduer from "./BookReduer";
import authReducer from "./authReducer";
import OrderReduer from "./OrderReducer";
import FilteredBookReduer from './FilteredBookReducer';

const rootReducer = combineReducers({
  BookReduer,
  authReducer,
  OrderReduer,
  FilteredBookReduer
});

export default rootReducer;
