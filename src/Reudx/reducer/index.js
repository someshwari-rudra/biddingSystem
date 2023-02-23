import { combineReducers } from "redux";
import { CoinsReducer } from "./coinReducer";
import { OnChangeReducer } from "./OnChangeReducer";
import { ResultReducer } from "./ResultReducer";
import { userReducer } from "./UserReducer";

export const RootReducer = combineReducers({
  coinReducer: CoinsReducer,
  userReducer: userReducer,
  resultReducer: ResultReducer,
  onChnageReducer: OnChangeReducer,
});
