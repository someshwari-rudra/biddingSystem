import { RESULT } from "../actions/ActionTypes";

const initailState = {
  userName: "",
  InputValue: "",
  resultDeclared: false,
};

export const ResultReducer = (state = initailState, action) => {
  switch (action.type) {
    case RESULT.ADD_RESULT:
      return {
        ...state,
        userName: action.userName,
        InputValue: action.inputValue,
      };
    case RESULT.IS_RESULT_DECLARED:
      return {
        ...state,
        resultDeclared: action.payload,
      };
    case RESULT.CLEAR_RESULT:
      return initailState
    default:
      return state;
  }
};
