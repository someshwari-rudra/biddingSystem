import { GENERATE_USER } from "../actions/ActionTypes";

const initialState = {
  users: [],
  userNames: [],
  name: "",
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
    default:
      return state;
  }
};
