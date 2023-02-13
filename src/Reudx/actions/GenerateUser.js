import Bidding from "../../ReusableComponent/Bidding";
import { CLASS_NAMES, COINS, GENERATE_USER } from "./ActionTypes";

export const generateUser = (userName) => (dispatch, getState) => {
  const state = getState();
  const inputValues = state.userReducer.inputValues;
  const name = state.userReducer.name;
  dispatch({
    type: COINS.RESET_COINS,
    payload: 0,
  });
  dispatch({
    type: GENERATE_USER.CREATE_USER,
    payload: <Bidding />,
    name: userName,
  });
  dispatch({
    type: GENERATE_USER.RESET_INPUT_VALUE,
    payload: { [name]: inputValues.flat(1) },
  });
  dispatch({
    type: CLASS_NAMES.FREE,
    payload:"free"
  })
};
