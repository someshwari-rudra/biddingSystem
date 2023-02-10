import { GENERATE_USER } from "../actions/ActionTypes";

const initialState = {
  users: [],
  userNames: [],
  name: "",
  inputValues: [],
  AllUserValues : [],
  totalUserGenerated: 0,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_USER.CREATE_USER:
      return {
        ...state,
        name: action.name,
        userNames: [...state.userNames, action.name],
        users: state.totalUserGenerated < 6 && [action.payload],
        totalUserGenerated:
          state.totalUserGenerated < 6 && state.totalUserGenerated + 1,
      };
    case GENERATE_USER.RESET_INPUT_VALUE:
      return {
        ...state,
        inputValues: [],
        AllUserValues: [...state.AllUserValues, action.payload],
      };
    case GENERATE_USER.FORM_SUBMIT:
      return {
        ...state,
        inputValues: [...state.inputValues, action.payload],
      };
    default:
      return state;
  }
};
