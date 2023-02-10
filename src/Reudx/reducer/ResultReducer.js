import { RESULT } from "../actions/ActionTypes";

const initailState = {
  userName: "",
  InputValue:""
};

export const ResultReducer = (state = initailState, action) => {
  switch (action.type) {
    case RESULT.ADD_RESULT:
      return {
        ...state,
        userName: action.userName,
        InputValue: action.inputValue,
      };
    default:
      return state;
  }
};
