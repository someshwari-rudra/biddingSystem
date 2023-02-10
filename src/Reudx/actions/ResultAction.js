import { lowestUniqueValue } from "../../utils/LowestUniqueValue";
import { findKeyByValue } from "../../utils/LowestUniqueValueKey";
import { GENERATE_USER, RESULT } from "./ActionTypes";

export const resultAction = (AllInputs) => (dispatch, getState) => {
  const state = getState();
  const inputValues = state.userReducer.inputValues;
  const name = state.userReducer.name;
  dispatch({
    type: GENERATE_USER.RESET_INPUT_VALUE,
    payload: { [name]: inputValues.flat(1) },
  });
  const value = lowestUniqueValue(AllInputs);
  const userName = findKeyByValue(AllInputs, value);
  dispatch({
    type: RESULT.ADD_RESULT,
    userName: userName,
    inputValue: value,
  });
};
