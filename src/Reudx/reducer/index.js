import { combineReducers } from "redux";
import { CoinsReducer } from "./coinReducer";
import { ResultReducer } from "./ResultReducer";
import { userReducer } from "./UserReducer";

export const RootReducer = combineReducers({
  coinReducer: CoinsReducer,
  userReducer: userReducer,
  resultReducer: ResultReducer,
});
