import { combineReducers } from "redux";
import { CoinsReducer } from "./coinReducer";
import { userReducer } from "./UserReducer";

export const RootReducer = combineReducers({
  coinReducer: CoinsReducer,
  userReducer: userReducer,
});
